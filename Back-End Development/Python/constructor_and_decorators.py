# Constructor
class Person:
    def __init__(self, name, occ):
        self.name = name
        self.occ = occ
    
    def details(self):
        print(f'My name is {self.name} and my occupation is {self.occ}')

objectA = Person("Ifham", "programmer")
objectA.details()

# Decorator
def greet(func):
    def wrapper(*args, **kwargs):
        print("-------------------------")
        func(*args, **kwargs)
        print("-------------------------")
    return wrapper

@greet
def myCat(name, sound):
    print(f'{sound}! my name is {name}')

@greet
def myDog(name, sound):
    print(f'{sound}! my name is {name}')

myCat("Leo", "Meow")
myDog("Casper", "Bark")