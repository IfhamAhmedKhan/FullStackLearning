class A:
    def A_method(self):
        return "This is A class method"

    def InnerClassMethod(self):
        class B:
            def __init__(self, outer_instance): 
                self.outer_instance = outer_instance

            def B_method(self):
                return "This is B class method (using outer class value): " + self.outer_instance.value  

        return B(self)

# Create an instance of A
objA = A()
objA.value = "This is the value from A"  

# Get the inner class instance from A's method
objB = objA.InnerClassMethod()

# Call the B class method
print(objA.A_method())  
print(objB.B_method())  
