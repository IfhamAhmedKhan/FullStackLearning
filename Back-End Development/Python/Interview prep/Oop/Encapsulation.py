class Student:
    def __init__(self):
        self.name = ""

    def getname(self):
        return self.name
    
    def setname(self, name):
        self.name = name 

obj = Student()
obj.setname("Ifham")
print(f"My name is {obj.getname()}")