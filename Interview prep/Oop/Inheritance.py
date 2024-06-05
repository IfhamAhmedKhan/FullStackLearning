# Single Inheritance
# Base class
class Animal:
    def speak(self):
        return "Animal speaks"

# Derived class
class Dog(Animal):
    def bark(self):
        return "Dog barks"

dog = Dog()
print(dog.speak())  
print(dog.bark())   

# Multiple Inheritance
# Base class 1
class Flyer:
    def fly(self):
        return "Flying"

# Base class 2
class Swimmer:
    def swim(self):
        return "Swimming"

# Derived class
class Duck(Flyer, Swimmer):
    pass

duck = Duck()
print(duck.fly())   # Output: Flying
print(duck.swim())  # Output: Swimming
 
# Multilevel Inheritance
# Base class
class Animal:
    def speak(self):
        return "Animal speaks"

# Derived class 1
class Dog(Animal):
    def bark(self):
        return "Dog barks"

# Derived class 2
class Puppy(Dog):
    def weep(self):
        return "Puppy weeps"

puppy = Puppy()
print(puppy.speak())  # Output: Animal speaks
print(puppy.bark())   # Output: Dog barks
print(puppy.weep())   # Output: Puppy weeps

# Hierarchical Inheritance
# Base class
class Animal:
    def speak(self):
        return "Animal speaks"

# Derived class 1
class Dog(Animal):
    def bark(self):
        return "Dog barks"

# Derived class 2
class Cat(Animal):
    def meow(self):
        return "Cat meows"

dog = Dog()
cat = Cat()
print(dog.speak())  # Output: Animal speaks
print(dog.bark())   # Output: Dog barks
print(cat.speak())  # Output: Animal speaks
print(cat.meow())   # Output: Cat meows

# Hybrid Inheritance
# Base class
class Animal:
    def speak(self):
        return "Animal speaks"

# Derived class 1
class Dog(Animal):
    def bark(self):
        return "Dog barks"

# Derived class 2
class Cat(Animal):
    def meow(self):
        return "Cat meows"

# Another base class
class Pet:
    def play(self):
        return "Pet plays"

# Derived class combining Dog and Pet (Multiple Inheritance)
class PetDog(Dog, Pet):
    def play_fetch(self):
        return "Pet Dog fetches"

pet_dog = PetDog()
print(pet_dog.speak())    # Output: Animal speaks
print(pet_dog.bark())     # Output: Dog barks
print(pet_dog.play())     # Output: Pet plays
print(pet_dog.play_fetch()) # Output: Pet Dog fetches
