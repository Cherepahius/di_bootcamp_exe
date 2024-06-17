#Ex1


#class Pets():
#    def __init__(self, animals):
#        self.animals = animals
#
#    def walk(self):
#        for animal in self.animals:
#            print(animal.walk())

#class Cat():
#    is_lazy = True
#
#    def __init__(self, name, age):
#        self.name = name
#        self.age = age
#
#    def walk(self):
#        return f'{self.name} is just walking around'

#class Bengal(Cat):
#    def sing(self, sounds):
#        return f'{sounds}'

#class Chartreux(Cat):
#    def sing(self, sounds):
#        return f'{sounds}'


#class Siames(Cat):
#    def sing(self, sounds):
#        return f'{sounds}'

#bengal_cat = Bengal(name="Alex", age=18)
#chartreux_cat = Chartreux(name="Garlield", age=12)
#siames_cat = Siames(name="Musiya", age=17)

#all_cats = [bengal_cat, chartreux_cat, siames_cat]

#saras_pets = Pets(animals=all_cats)

#saras_pets.walk() 


#Ex2


#class Dog ():
#    def __init__(self, name, age, weight):
#        self.name = name
#        self.age = age
#        self.weight = weight
#    def bark(self):
#        print(f"{self.name} is barking!")
#
#    def speed(self):
#        return  self.weight / self.age * 10
    
#    def fight(self, other_dog):
#        self.power = self.speed() * self.weight
#        other_power = other_dog.speed() * other_dog.weight
#        if self.power > other_power:
#            return f"{self.name} won over {other_dog.name}"
#        elif self.power < other_power:
#            return f"{other_dog.name} won over {self.name}"
#        else:
#            return f"{other_dog.name} and {self.name} are even"

#dog1 = Dog(name = "Bobby", age = 5, weight= 70)
#dog2 = Dog(name = "Garry", age = 7, weight= 60)
#dog3 = Dog(name = "Alice", age = 4, weight= 90)

#print(dog1.bark())
#print(dog2.bark())
#print(dog3.bark())

#print(dog1.speed())
#print(dog2.speed())
#print(dog3.speed())

#print(dog1.fight(dog2))
#print(dog2.fight(dog3))
#print(dog1.fight(dog3))



