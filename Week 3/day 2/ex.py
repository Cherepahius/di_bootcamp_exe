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


#Ex.3


#Ex4

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", members)


my_family.born(name='James', age=0, gender='Male', is_child=True)
print(my_family.is_18('Michael'))  # Should return True
print(my_family.is_18('James'))    # Should return False
my_family.family_presentation()


#ex.5


class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power!")
                return
        print(f"No member named {name} found in the family.")

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")


incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredible_members)


incredibles_family.incredible_presentation()

incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')


incredibles_family.incredible_presentation()


try:
    incredibles_family.use_power('Michael')  
    incredibles_family.use_power('Jack')     
except Exception as e:
    print(e)
