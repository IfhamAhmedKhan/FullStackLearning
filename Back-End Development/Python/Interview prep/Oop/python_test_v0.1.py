# --------------------------
# 1) Sum of Two Numbers
# Write a function that takes two numbers as input and returns their sum.
def Sum_func(first_num, second_num):
    return first_num + second_num

print(f"The sum is {Sum_func(10,20)}")

# --------------------------
# 2) Find the Largest Number
# Write a function that takes a list of numbers and returns the largest one.
num_list = [50,2,6,2,1,7,51]
Largest = 0
def FindLargerNum():
    num_list.sort()
    for i in range(6):
        if(num_list[i]>num_list[i+1]):
            Largest = num_list[i]
        else:
            Largest = num_list[i+1]
            
        
    return Largest
            
print(FindLargerNum())
# --------------------------
# 3) Check if a Number is Even or Odd
# Write a function that takes a number and returns whether it is even or odd.
def Even_Odd_Checker(numToCheck):
    if(numToCheck%2==0):
        print("Number is even")
    else:
        print("Number is odd")
    
Even_Odd_Checker(5)
# --------------------------
# 4) Count the vowels in string
# Write a function that takes a string and returns the number of vowels in the string.
def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

print(count_vowels("hello world"))

# --------------------------
# 5) Reverse a String
# Write a function that takes a string and returns the string reversed.
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))


# --------------------------
# 6) Check if a Word is a Palindrome
# Write a function that takes a word and returns whether it is a palindrome (reads the same forward and backward).
def is_palindrome(word):
    return word == word[::-1]

print(is_palindrome("racecar"))
print(is_palindrome("hello"))


# --------------------------
