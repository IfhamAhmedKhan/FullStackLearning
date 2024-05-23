import sqlite3
import streamlit as st

# Function to create the database and user table if it doesn't exist
def create_database():
    conn = sqlite3.connect('login_data.db')
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS user_inputs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT
    )
    ''')
    conn.commit()
    conn.close()

# Function to insert data into the user table
def insert_data(email, password):
    conn = sqlite3.connect('login_data.db')
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO user_inputs (email, password)
    VALUES (?, ?)
    ''', (email, password))
    conn.commit()
    conn.close()

# Function to verify user credentials
def verify_user(email, password):
    conn = sqlite3.connect('login_data.db')
    cursor = conn.cursor()
    cursor.execute('''
    SELECT * FROM user_inputs WHERE email = ? AND password = ?
    ''', (email, password))
    result = cursor.fetchone()
    conn.close()
    return result

# Function to display the signup page
def signup_page():
    st.title("Signup")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    if st.button("Signup"):
        insert_data(email, password)
        st.success("Signup successful! You can now login.")

# Function to display the login page
def login_page():
    st.title("Login")
    email = st.text_input("Email")
    password = st.text_input("Password", type='password')
    if st.button("Login"):
        user = verify_user(email, password)
        if user:
            st.session_state.logged_in = True
            st.session_state.email = email
        else:
            st.error("Invalid email or password")

# Function to display the home page
def home_page():
    st.title("Home Page")
    st.write(f"Welcome, {st.session_state.email}!")

# Main function to control the flow of the app
def main():
    st.sidebar.title("Navigation")
    if 'logged_in' not in st.session_state:
        st.session_state.logged_in = False

    if st.session_state.logged_in:
        home_page()
    else:
        choice = st.sidebar.radio("Go to", ("Login", "Signup"))
        create_database()
        if choice == "Login":
            login_page()
        elif choice == "Signup":
            signup_page()

if __name__ == "__main__":
    main()
