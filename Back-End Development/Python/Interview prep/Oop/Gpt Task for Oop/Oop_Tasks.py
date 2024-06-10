# OOP (General)
# Create a Class:
# Write a Python class called Car with attributes like make, model, and year, and a method start_engine that prints "Engine started".

class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        print("Engine started")

    # Class Methods:
    # Add a class method to the Car class called car_info that returns a formatted string containing the car's make, model, and year.
    def car_info(self):
        return "Make: {}, Model: {}, Year: {}".format(self.make, self.model, self.year)
    
    # Update Attributes:
    # Write a method to update the year attribute of the Car class and demonstrate its usage.
    def update_year(self, updateYear):
        self.year = updateYear
        return self.year

BMW = Car("BMW", "BMW 5 series", 1980)
BMW.start_engine()
print("-------------------------------------------")


# Class Instances:
# Create multiple instances of the Car class and print out their attributes.

# Instances number 2
Ferrari = Car("Ferrari", "Daytona SP3", 2022)
Ferrari.start_engine()
print(f"Make: {Ferrari.make}, Model: {Ferrari.model}, Year: {Ferrari.year}")
print("-------------------------------------------")
# Instance number 3
Lamborghini = Car("Lamborghini", "Gallardo", 2003)
Lamborghini.start_engine()
print(Lamborghini.car_info())
print("-------------------------------------------")

# updating the year
print(f"Record updated: year for lamborghini gallardo is {Lamborghini.update_year(2006)}")

# Inheritance:
# Create a subclass of Car called ElectricCar that adds an attribute for battery size and a method to describe the battery.

class ElectricCar(Car):
    def __init__(self, make, model, year, batterySize):
        super().__init__(make, model, year)
        self.batterySize = batterySize

    def batteryDetails(self, batteryType):
        return "Battery Details: Size: {}, Type: {}".format(self.batterySize,batteryType)


# new instance for electric car
Hyundai = ElectricCar("Hyundai", "Ioniq 6", 2024, "100 kWh")
print("-------------------------------------------")
print(Hyundai.car_info())
print(Hyundai.batteryDetails("li-ion"))