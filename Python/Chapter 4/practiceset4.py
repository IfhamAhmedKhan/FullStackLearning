# Write a program to store seven fruits in a list entered by the user.
fruits = []
for i in range(7):
    fruit = input("Enter fruit name: ")
    fruits.append(fruit)
    
print(fruits)
    
# Write a program to accept marks of 6 students and display them in a sorted manner.
marks = []
for i in range(6):
    mark = int(input("Enter a number: "))
    marks.append(mark)
    
marks.sort()
print(marks)

# Check that a tuple type cannot be changed in python
person1 = ("Ifham", 24, 'A', 3.48)
print(type(person1))  # <class 'tuple'>

person2 = ["Afnan", 20, 'A', 3.55]
print(type(person2))  # <class 'list'>

# Convert list to tuple
person2 = tuple(person2)
print(type(person2))  # <class 'tuple'>

# Convert tuple back to list
person2 = list(person2)
print(type(person2))  # <class 'list'>


# Write a program to sum a list with 4 numbers.
numbers = [1, 2, 3, 4]
answer = sum(numbers)
print(answer)

# Write a program to count the number of zeros in the following tuple:
# a = (7, 0, 8, 0, 0, 9)
a = (7, 0, 8, 0, 0, 9)
count = a.count(0)
print(count)
