# Write a python program to display a user entered name followed by Good Afternoon using input () function.

name = input("Enter your name: ")
print(name+" Good Afternoon")

# Write a program to fill in a letter template given below with name and date.
'''
letter = 
Dear <|Name|>,
You are selected!
<|Date|>
'''
date = input("Enter date(m/d/y): ")
letter = f"Dear {name}\nYou are selected!\n{date}"
print(letter)

# Write a program to detect double space in a string.
sentence = "My dog  eat my  apple"
result = sentence.count("  ")
if(result>0):
    print("It contains double space")
else:
    print("Doesn't contains double space")
    
# Replace the double space from problem 3 with single spaces.
sentence = sentence.replace("  ", " ")
print(sentence)

# Write a program to format the following letter using escape sequence characters.
letter = "Dear Ifham, You are amazing. Thanks!"


letter = "Dear Ifham,\nYou are amazing.\nThanks!"
print(letter)
