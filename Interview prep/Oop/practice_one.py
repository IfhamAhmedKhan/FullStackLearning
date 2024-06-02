# creating house class
class house:
    # creating constructor of house class
    def __init__(self, name, dish="Biryani"):
        self.name = name
        self.dish = dish

    # creating method for house class
    def bedroom(self):
        print(self.name, ', This is bedroom')

    # creating method for house class using argument
    def kitchen(self):
        print(self.name, ", Let's cook", self.dish, "We have already made", self.dish)

# creating object of house class with default dish
ifham_house = house("Ifham")
ifham_house.bedroom()
ifham_house.kitchen()

# creating object of house class with specified dish
ahmed_house = house("Ahmed", "Korma")
ahmed_house.bedroom()
ahmed_house.kitchen()


#---------------------------------------

class Multiplier:
    num_one = 10
    num_two = 20
    
    def multi(self):
        return self.num_one * self.num_two

student_math = Multiplier()
result = student_math.multi()
print(result)

#----------------------------------------
