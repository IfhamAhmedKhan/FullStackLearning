# Method Overloading (not directly supported in Python):
# Simulate method overloading by creating multiple methods with different numbers of parameters in a class Calculator.
"""
class Calculator:
    def addNumbers(self, numOne, numTwo):
        return numOne+numTwo
    def addNumbers(self, numOne, numTwo, numThree):
        return numOne+numTwo+numThree
    def addNumbers(self, numOne, numTwo, numThree, numFour):
        return numOne+numTwo+numThree+numFour
    
objCal = Calculator()
print(objCal.addNumbers(1,2))
print(objCal.addNumbers(1,2,3))
print(objCal.addNumbers(1,2,3,4))

Since python does not support method overloading only last method with four arguments will be recognized then we must use argus to do it like done below
"""

class Calculator:
    def addNumbers(self, *args):
        return sum(args)

objCal = Calculator()
print(objCal.addNumbers(1, 2))       
print(objCal.addNumbers(1, 2, 3))    
print(objCal.addNumbers(1, 2, 3, 4))  

# Method Overriding:
# Create a base class Shape with a method area. Create derived classes Circle and Rectangle that override the area method.

class Shape:
    def area(self):
        pass  

class Circle(Shape):
    def area(self, radius):
        return 3.14159 * radius * radius  

class Rectangle(Shape):
    def area(self, length, width):
        return length * width 

objCircle = Circle()
print(objCircle.area(2)) 

objRectangle = Rectangle()
print(objRectangle.area(2, 3))  

# Polymorphic Functions:
# Write a function that can take any Shape object and call its area method, demonstrating polymorphism.

def calculate_area(shape):
    return shape.area

print(calculate_area(objCircle))

# Operator Overloading:
# Implement operator overloading for the + operator in a class Vector.

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 4)
v2 = Vector(5, -2)

v3 = v1 + v2

print(v3)  

# Duck Typing:
# Write a function that accepts objects with a fly method and demonstrate duck typing with classes Bird and Airplane.

class Bird:
    def fly(self):
        print("Flapping wings to fly!")

class Airplane:
    def fly(self):
        print("Starting engines to fly!")

def let_it_fly(obj):
    obj.fly()

bird = Bird()
airplane = Airplane()

let_it_fly(bird)       
let_it_fly(airplane)   
