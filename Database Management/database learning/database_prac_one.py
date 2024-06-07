import sqlite3

conn = sqlite3.connect('customer.db')

cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT UNIQUE
               )              
               
''')

cursor.execute('''
    INSERT INTO users (name, age, email)
    VALUES ('Alice', 30, 'alice@example.com')
''')

cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

