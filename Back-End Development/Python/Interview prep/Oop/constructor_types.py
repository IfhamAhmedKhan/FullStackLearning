class MyClass:
    def __init__(self):
        print("this is default constructor")

class Pokemon:
    def __init__(self,name):
        self.name = name
        print(self.name, "this is pokemon class")


Pokemon("pikachu")

MyClass()