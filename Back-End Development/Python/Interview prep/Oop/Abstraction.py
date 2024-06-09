from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def makeSound(self):
        pass
    
class Cat(Animal):
    def makeSound(self):
        return "MEOW"
    
class Dog(Animal):
    def makeSound(self):
        return "Bark"
    
dog = Dog()
cat = Cat()

print(f"{dog.makeSound()}")
print(f"{cat.makeSound()}")