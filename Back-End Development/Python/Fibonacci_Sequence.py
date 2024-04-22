"""
Task: Calculate the Fibonacci Sequence
Write a Python function that calculates the Fibonacci sequence up to a specified number of terms. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. For example, the first 10 terms of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
                                                        input:1, 2, 3, 4, 5, 6, 7, 8 , 9,  10
Your function should take the number of terms n as an argument and return a list containing the Fibonacci sequence up to the nth term.

"""
list = [0,1]
def Fibonacci_Sequence(n):
    if(n==1):
        return list[0]
    elif(n==2):
        return list
    else:
        while(n>0):
            return 
             

print(Fibonacci_Sequence(4))