#Ex.1

#1.Class
#A class is a blueprint or prototype for creating objects (instances). It defines a set of attributes and methods that the created objects will have. In #essence, a class encapsulates data and functionality.

#2. Instance
#An instance is a concrete occurrence of any object, created using the class. While a class is the template, an instance is an actual object built from that #template with specific data.

#3. Encapsulation
#Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, or class. It restricts direct access to some of the object's components, which is a means of preventing accidental interference and misuse of the data. This is typically achieved by making some attributes or methods private (using a leading underscore).

#4. Abstraction
#Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It is a way to reduce complexity and allow efficient design and implementation.


#5. Inheritance
#Inheritance is a mechanism where one class inherits attributes and methods from another class. The class that inherits is called a subclass (or derived class), and the class from which it inherits is called a superclass (or base class).

#6. Multiple Inheritance
#Multiple inheritance is a feature where a class can inherit attributes and methods from more than one superclass.

#7. Polymorphism
#Polymorphism allows objects of different classes to be treated as objects of a common super class. It is often used with inheritance to perform a single action in different ways.

#8. Method Resolution Order (MRO)
#Method Resolution Order (MRO) is the order in which Python looks for a method in a hierarchy of classes. This is especially important in the context of multiple inheritance to avoid ambiguity. Python uses the C3 linearization algorithm to determine the MRO.


#Ex.2

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
    def __repr__(self):
        return f"{self.value} of {self.suit}"    

class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
        for suit in suits:
            for value in values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len (self.cards) > 0:
            return self.cards.pop()
        else:
            return None       

deck = Deck()
deck.shuffle()
card = deck.deal()

if card:
    print(f"Your card is: {card}")
else:
    print("Deck is empty")

      