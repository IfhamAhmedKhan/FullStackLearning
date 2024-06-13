class house:
    def kitchen(self):
        return "welcome to kitchen"
    
    def bathroom(self):
        return "here you can take bath"
    
    def room_one(self):
        return "you can rest here and watch movies on the tv"
    
ifham_house = house()
print(ifham_house.kitchen())

afnan_house = house()
print(afnan_house.kitchen())


aayan_house = house()
print(aayan_house.kitchen())
 

farman_house = house()
print(farman_house.kitchen())

class Book:
    def __init__(self):
        self.__title = ""
        self.__author = ""
        self.__genre = ""
        self.__quantity = 0

    def get_title(self):
        return self.__title
    
    def set_title(self,title):
        self.__title = title

    def get_author(self):
        return self.__author
    
    def set_author(self,author):
        self.__author = author
    
    def get_genre(self):
        return self.__genre
    
    def set_genre(self,genre):
        self.__genre = genre
    
    def get_quantity(self):
        return self.__quantity
    
    def set_quantity(self,quantity):
        self.__quantity = quantity

    def check_out(self):
        return "Checking out Book details: {}, {}, {}, {}".format(self.__title, self.__author, self.__genre, self.__quantity) 

    def return_book(self):
        return "Returning book details: {}, {}, {}, {}".format(self.__title, self.__author, self.__genre, self.__quantity)


book = Book()
book.set_title("World of ifterious")
book.set_author("Ifham Ahmed Khan")      
book.set_genre("Science and fantasy")
book.set_quantity(100)

print(book.check_out())
print(book.return_book())