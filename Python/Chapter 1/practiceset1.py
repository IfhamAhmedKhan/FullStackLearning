# Chapter 1 practice set

"""
Write a program to print Twinkle twinkle little star poem in python.
"""

print("Twinkle, twinkle, little star, how I wonder what you are. Up above the world so high,")
print("like a diamond in the sky. Twinkle, twinkle, little star, how I wonder what you are.")
print("When the blazing sun is set, and the grass with dew is wet. Then you show your little")
print("light, twinkle, twinkle all the night. Twinkle, twinkle little star, how I wonder what you are.")
print("Then the traveler in the dark thanks you for your tiny spark. How could he see where to")
print("go if you did not twinkle so? Twinkle, twinkle little star, how I wonder what you are.")
print("As your bright and tiny spark lights the traveler in the dark, though I know not what you")
print("are, twinkle, twinkle, little star. Twinkle, twinkle, little star, how I wonder what you are.")

"""
Use REPL and print the table of 5 using it. 
"""
# Type python in cmd to enter REPL then print table using for loop

"""
Install an external module and use it to perform an operation of your interest. 
"""
# pip install pyjokes
import pyjokes

joke = pyjokes.get_joke()
print(joke)

"""
Write a python program to print the contents of a directory using the os module.
Search online for the function which does that. 
"""
"""
Label the program written in problem 4 with comments. 
"""
# importing operating system directory
import os

# directory folder path set
directory = "/"

# stored directory data into content
content = os.listdir(directory)

# printing content
print(content)

