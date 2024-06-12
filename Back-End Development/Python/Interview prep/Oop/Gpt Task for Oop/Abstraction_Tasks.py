# Abstract Classes:
# Create an abstract base class Employee with an abstract method calculate_salary. Derive two classes FullTimeEmployee and PartTimeEmployee that implement the method.

from abc import ABC,abstractmethod

class Employee(ABC):
    @abstractmethod
    def calculate_salary(self):
        pass

class FullTimeEmployee(Employee):
    def calculate_salary(self):
        return "Your salary is 1000"

class PartTimeEmployee(Employee):
    def calculate_salary(self):
        return "Your salary is 500"
    
objFullTimeEmp = FullTimeEmployee()
print(objFullTimeEmp.calculate_salary())

objPartTimeEmp = PartTimeEmployee()
print(objPartTimeEmp.calculate_salary())

print("------------------------------")

# Interface Implementation:
# Define an interface Drawable with a method draw and implement it in classes Circle and Square.
class Drawable(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Drawable):
    def draw(self):
        print("Drawing a circle.")

class Square(Drawable):
    def draw(self):
        print("Drawing a square.")

circle = Circle()
circle.draw() 
square = Square()
square.draw() 

# Data Hiding:
# Create a class Student with private attributes and use public methods to interact with those attributes.
class Student:
    def __init__(self):
        self.__name = ""
        
    def set_name(self, name):
        self.__name= name

    def get_name(self):
        return self.__name

def Student_details(student):
    return student.get_name()

obj = Student()
obj.set_name("Jack")
print(Student_details(obj))

# Abstract Methods:
# Create an abstract base class Transport with abstract methods start and stop. Implement these methods in derived classes Car and Bike.

class Transport(ABC):
    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass 

class Car(Transport):
    def start(self):
        return "Your Car is starting now"
    
    def stop(self):
        return "Your Car is stop now"

class Bike(Transport):
    def start(self):
        return "Your Bike is starting now"
    
    def stop(self):
        return "Your Bike is stop now"


objCar = Car()
print(objCar.start())
print(objCar.stop())

objBike = Bike()
print(objBike.start())
print(objBike.stop())