#Exercise 1

#keys = ['Ten', 'Twenty', 'Thirty']
#values = [10, 20, 30]
#result = dict(zip(keys, values))
#print(result)

#Exercise 2

#def calculate_ticket_price(age):
#    if age < 3:
#        return 0
#    elif 3 <= age <= 12:
#        return 10
#    else:
#        return 15
    
#def input_family_members():
#    family = {}
#    while True:
#        name = input("Enter family member's name(done to finish): ").strip()
#        if name.lower() == 'done':
#            break
#        age = int(input(f"Enter {name}'s age: ").strip())
#        family[name] = age
#    return family

#family = input_family_members()
#total_cost = 0

#for member, age in family.items():
#    cost = calculate_ticket_price(age)
#    print(f"{member.capitalize()} has to pay: ${cost}")
#    total_cost += cost

#print(f"Total cost for the family: ${total_cost}")

#Exercise 3

#brand = {
#    "name": "Zara",
#    "creation_date": 1975,
#    "creator_name": "Amancio Ortega Gaona",
#    "type_of_clothes": ["men", "women", "children", "home"],
#    "international_competitors": ["Gap", "H&M", "Benetton"],
#    "number_stores": 7000,
#    "major_color": {
#        "France": "blue",
#        "Spain": "red",
#        "US": ["pink", "green"]
#    }
#}
#3
#brand["number_stores"] = 2
#4
#clients = ", ".join(brand["type_of_clothes"])
#print(f"Zara's clients are {clients}.")
#5
#brand["coutry_creation"] = "Spain"
#6
#if "international_competitors" in brand:
#    brand["international_competitors"].append("Desigual")
#7    
#del brand["creation_date"]
#8
#print(brand["international_competitors"][-1])
#9
#print(", ".join(brand['major_color']["US"]))
#10
#print(len(brand))
#11
#print(brand.keys())
#12
#more_on_zara = {
#    'creation_date': 1975,'number_stores': 10000
#}
#13
#brand.update(more_on_zara)
#14
#print(brand["number_stores"])
#We used an brand.update to update a number stores from 7000 to 10000

#Exerice 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#1
disney_users_A = {user: index for index, user in enumerate(users)}
print(disney_users_A)
#2
disney_users_B = {index: user for index, user in enumerate(users)}
print(disney_users_B)
#3
sorted_users = sorted(users)
disney_users_C = {user: index for index, user in enumerate(sorted_users)}
print(disney_users_C)
#4
disney_users_A_i = {user: index for index, user in enumerate(users) if 'i' in user}
print(disney_users_A_i)
#5
disney_users_A_mp = {user: index for index, user in enumerate(users) if user.lower().startswith(('m', 'p'))}
print(disney_users_A_mp)

