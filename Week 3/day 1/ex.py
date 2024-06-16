#Ex1



#class Cat:
#    def __init__(self, cat_name, cat_age):
#        self.name = cat_name
#        self.age = cat_age

#cat1 = Cat("Alex", 18)
#cat2 = Cat("Bob", 4)
#cat3 = Cat("Mysua", 17)

#cats=[cat1, cat2, cat3]
#oldest_cat = cats[0]
#for cat in cats:
#    if cat.age > oldest_cat.age:
#        oldest_cat = cat

#print(f"The oldest cat is {oldest_cat.name} and he is {oldest_cat.age} years old ")



#Ex2



#class Dog:
#    def __init__(self,name, height) -> None:
#        self.name = name
#        self.height = height
#
#    def bark(self):
#        print(f"{self.name} goes wooooooooof")
#    
#    def jump(self):
#        jump_height = self.height *2
#        print(f"{self.name} can jump {jump_height} cm long! Wooooooow")

#davids_dog = Dog("Max", 70)
#print(f"David's dog name is {davids_dog.name} and his height is {davids_dog.height} cm")
#davids_dog.bark()
#davids_dog.jump()

#evas_dog = Dog("Kelly", 50)
#print(f"Eva's dog name is {evas_dog.name} and his height is {evas_dog.height} cm")
#evas_dog.bark()
#evas_dog.jump()

#if davids_dog.height > evas_dog.height:
#    print(f"The bigger dog is {davids_dog.name}")
#else:
#    print(f"The bigger dog is {evas_dog.name}")
 


#Ex.3



#class Song:
#    def __init__(self, lyrics) -> None:
#        self.lyrics = lyrics
#        pass
#
#    def sing_a_song(self):
#        for line in self.lyrics:
#            print(line)
#herald_of_darkness = Song(["Show me the Champion of Light","I'll show you the Herald of Darkness","Lost in a never-ending night","Diving deep to the surface, oh"])

#herald_of_darkness.sing_a_song()


#Ex.4


class Zoo:
    def __init__(self,zoo_name) -> None:
        self_name = zoo_name
        self.animals = []
        pass
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} is welcome in our zoo")
        else:
            print(f"{new_animal} is already in our zoo")

    def check_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animals(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} is sold!")
        else:
            print(f"{animal_sold} is not in the zoo")

    def sort_animal(self):
        sorted_animals={}
        for animal in sorted(self.animals):
            first_letter = animal[0]
            if first_letter not in sorted_animals:
                sorted_animals[first_letter] = [animal]
            else:
                sorted_animals[first_letter].append(animal)
        
        return sorted_animals
    
    def get_groups(self):
        sorted_animals = self.sort_animal()
        print("Animals grouped by first letter:")
        for key, value in sorted_animals.items():
            print(f"{key}: {value}")

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Hedgehog")
ramat_gan_safari.add_animal("Hippo")
ramat_gan_safari.add_animal("Owls")
ramat_gan_safari.add_animal("Fox")
ramat_gan_safari.add_animal("Fox")
ramat_gan_safari.add_animal("Wolf")
ramat_gan_safari.add_animal("Rhino")

ramat_gan_safari.check_animals()

ramat_gan_safari.sell_animals("Fox")

ramat_gan_safari.check_animals()

ramat_gan_safari.get_groups()