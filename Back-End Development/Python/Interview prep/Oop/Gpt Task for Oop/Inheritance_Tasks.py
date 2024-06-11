from abc import ABC, abstractmethod

# Inheritance
# Base and Derived Classes:
# Create a base class Animal with a method make_sound. Create a derived class Dog that overrides make_sound to print "Bark".

class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass

class Dog(Animal):
    # Using Super:
    # Use the super() function in the Dog class to call the __init__ method of the Animal class.
    def __init__(self, name):
        super().__init__(name)

    def make_sound(self):
        return "My dog name is {} and he makes a sound: Bark".format(self.name)

dog_leo = Dog("Leo")
print(dog_leo.make_sound())

# Multiple Inheritance:
# Create another base class Pet with an attribute owner_name. Create a class PetDog that inherits from both Dog and Pet.
print("--------------------------------")
class Pet:
    def __init__(self, owner_name):
        self.owner_name = owner_name

class PetDog(Dog, Pet):
    def __init__(self, name, owner_name):
        Dog.__init__(self, name)
        Pet.__init__(self, owner_name)

    def ownerAndDog(self):
        return "My name is {} and my dog name is {} and he barks a lot".format(self.owner_name, self.name)

objOfPetDog = PetDog("Leo", "Jack")
print(objOfPetDog.ownerAndDog())

# Method Resolution Order
print(PetDog.mro())
print("--------------------------------")
# Abstract Base Class:
# Define an abstract base class Vehicle with an abstract method move. Create two derived classes, Car and Boat, that implement the move method.

class Vehicle(ABC):
    @abstractmethod
    def move(self):
        pass
    
class Car(Vehicle):
    def move(self):
        return "I am driving a car"

class Boat(Vehicle):
    def move(self):
        return "I am driving a boat"
    
car = Car()
boat = Boat()

print(f"{car.move()}")
print(f"{boat.move()}")