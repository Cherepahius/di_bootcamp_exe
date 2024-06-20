#Ex1

#from typing import Union, Self


#class Currency:
#    def __init__(self, currency: str, amount: int):
#        self.currency = currency
#        self.amount = amount

#    def __str__(self) -> str:
#        if self.amount > 1:
#            return f"{self.amount} {self.currency}s"
#        else:
#            return f"{self.amount} {self.currency}"

#    def __repr__(
#        self,
#    ) -> (
#        str
#    ):  
#        if self.amount > 1:
#            return f"{self.amount} {self.currency}s"
#        else:
#            return f"{self.amount} {self.currency}"

#    def __add__(
#        self, other: Union["Currency", int]
#    ) -> "Currency":  
#        if isinstance(other, Currency):
#            if other.currency == self.currency:
#                return Currency(self.currency, self.amount + other.amount)
#            else:
#                raise ValueError(
#                    f"Cannot add between Currency type {self.currency} and {other.currency}"
#                )
#        elif isinstance(other, int):
#            return Currency(self.currency, self.amount + other)

#    def __iadd__(self, other: Union["Currency", int]) -> Self:
#        """Method for adding/updating the amount of the calling Currency object (i.e Self)"""
#        if isinstance(other, Currency):
#            self.amount += other.amount
#        elif isinstance(other, int):
#            self.amount += other
#        return self


#def main():
#    c1 = Currency("dollar", 5)
#    c2 = Currency("dollar", 10)
#    c3 = Currency("shekel", 1)
#    c4 = Currency("shekel", 10)

    # print(c1)

#    currencies = [c1, c2, c3, c4]

    # print(c1 + c2)

#    c3 += 5

#    print(c3)


#if __name__ == "__main__":
#    main()


#EX2


#def sum_numbers(a, b):
#    result = a + b
#    print(f"{a} + {b} = {result}")

#from func import sum_numbers
#def main():
#    num1 = 5
#    num2 = 10
#    sum_numbers(num1, num2)   
#if __name__ == "__main__":
#    main()


#EX3
 
#import random
#import string    

#def generate_random_string(length):
#    letters = string.ascii_letters
#    result_str = ''.join(random.choice(letters) for i in range(length))
#    return result_str
#random_string = generate_random_string(5)
#print("Random string of length 5 is:", random_string)



#EX4


#import datetime

#def display_date_and_time():
#    date_time = datetime.datetime.now()
#    print(date_time.strftime("%Y-%m-%d %H:%M:%S"))
#display_date_and_time()    


#EX5


#import datetime

#def time_until_January_1():
#    now = datetime.datetime.now() 
#    next_year = now.year + 1
#    january_1st = datetime.datetime(next.year, 1, 1)

#    time_left = january_1st - now

#    days = time_left.days
#    hours,remainder = divmod(time_left.seconds, 3600)
#    minutes,seconds = divmod(remainder, 60)

#    print(f"{days} days, {hours} hours, {minutes} minutes, {seconds} seconds until 1st of January")
#    time_until_January_1()


#Ex.6

#import datetime

#def minutes_lived(birthdate):
    
#    birthdate_obj = datetime.datetime.strptime(birthdate, '%Y-%m-%d')
#    now = datetime.datetime.now()
#    minutes_lived = (now - birthdate_obj).total_seconds() / 60
#    print(f"You have lived approximately {int(minutes_lived):,} minutes.")
#birthdate = '1997-06-11'  
#minutes_lived(birthdate)


#Ex.7

from faker import Faker

fake = Faker()

users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language": fake.language_code()
        }
    users.append(user)

for _ in range(5):
    add_user()

for user in users:
    print(user)    