# Private Attributes:
# Create a class BankAccount with private attributes __balance and __account_number.

class BankAccount:
    def __init__(self):
        self.__balance = 0
        self.__account_number = 0
        
    # Getter and Setter Methods:
    # Add getter and setter methods for the private attributes of the BankAccount class.
    def get_balance(self):
        return self.__balance
        
    def set_balance(self, balance):
        self.__balance = balance
        
    def get_accountNumber(self):
        return self.__account_number
        
    def set_accountNumber(self, accNum):
        self.__account_number = accNum
        
    # Property Decorators:
    # Use property decorators to make the balance attribute read-only.
    @property
    def balance(self):
        return self.__balance
        
bankObj = BankAccount()
bankObj.set_balance(1000)
bankObj.set_accountNumber(1)
print(f"Welcome to Meezan Bank your account number is {bankObj.get_accountNumber()} and your current balance is {bankObj.balance}")

# Name Mangling:
# Demonstrate name mangling by trying to access the private attributes directly and explaining the error.
