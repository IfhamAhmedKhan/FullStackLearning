# Overriding
class A():
    def mathWork(self):
        print("This is A class")
class B(A):
    def mathWork(self):
        super().mathWork()
        return "This is B class"
    
# Overloading
class C:
    def mathWork(self, *args):
        return sum(args)

objOne = B()
print(f"{objOne.mathWork()}")

objTwo = C()
print(f"Two arguments: {objTwo.mathWork(1, 2)}") 
print(f"Three arguments: {objTwo.mathWork(1, 2, 3)}")  