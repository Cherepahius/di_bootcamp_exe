class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
        
    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
            
    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-O!"
        return info
    
    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        plural_animals = [animal + 's' for animal in animal_types]
        if len(plural_animals) > 1:
            animals_str = ', '.join(plural_animals[:-1]) + ' and ' + plural_animals[-1]
        else:
            animals_str = plural_animals[0]
        return f"{self.name}'s farm has {animals_str}." 
macdonald = Farm("McDonald")
macdonald.add_animal('goat', 12)
macdonald.add_animal('cow', 2)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')

print(macdonald.get_info())

animal_types = macdonald.get_animal_types()
print(animal_types)

print(macdonald.get_short_info())