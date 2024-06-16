#--------Exercise 1---------------

#my_fav_numbers = {1, 10, 11, 23}
#new_numbers ={2, 20}
#my_fav_numbers.update(new_numbers)
#my_fav_numbers.remove(1)
#print(my_fav_numbers)

#friend_fav_numbers ={22, 15, 12, 254}
#my_fav_numbers.update(friend_fav_numbers)
#print(my_fav_numbers)

#--------Exercise 2---------------


# U can't add anything to a tuple cause it is unchangeable

#--------Exercise 3---------------




#basket = ["Banana", "Apple", "Oranges", "Blueberries"]
#basket.remove("Banana")
#basket.remove("Blueberries")
#basket.append("Kiwi")
#basket.insert(1,"Apple")
#count = basket.count("Apple")
#print(basket)
#print(count)

#--------Exercise 4---------------


#z = [1.5 + i*0.5 for i in range (8)] 
#print(z)

#x = [1 + i+1 for i in range (19)]
#print(x)
#v = x[1::2]
#print(v)

#--------Exercise 5---------------


#for i in range(1, 21):
#    if i % 2 == 0:
#        print(i)


#--------Exercise 6---------------

#v = input("Please input your name - ") 
#x="Dima"
#while x != v:
#    v = input("Please input your name - ") 
#else:
#   print("U have the same name")


#--------Exercise 7---------------



#v = input("Enter yout favorite fruits(one or many) but separate it with one space : ")
#list_fruit = list(v.split(" "))
#print(list_fruit)
#b = input("Name one of fruit - ")
#b = list(b.split(" "))
#if b == list_fruit:
#    print("Enjoy")
#elif b != list_fruit:
#    print("Enjoy new")


#--------Exercise 8---------------

#a = 10
#b = 2.5
#addtop=[]
#print("Enter the pizza topings, type 'quit' to stop")
#while True:
#    top = input("Enter a topping - ")
#    if top == 'quit':
#        break
#    addtop.append(top)
#print(f"We will add {addtop} to your pizza")
#price = a + len(addtop)*b
#print(f"Your price is - {price}")


#--------Exercise 9---------------
#def calculate_ticket_price(age):
#    if age < 3:
#        return 0
#    elif 3 <= age <= 12:
#        return 10
#    else:
#        return 15

#num_people = int(input("How many people in your family? "))
#total_cost = 0

#for i in range(1, num_people + 1):
#    age = int(input(f"Enter age of person {i}: "))
#    ticket_price = calculate_ticket_price(age)
#    total_cost += ticket_price

#print(f"Total cost for the family's tickets: ${total_cost}")


#Teenagers part

#names = ["Alice", "Bob", "Charlie", "David", "Emily"]

#names_copy = names[:]  

#for name in names_copy:
#    age = int(input(f"Enter age of {name}: "))
#    if 16 <= age <= 21:
#        print(f"{name} can watch the movie.")
#    else:
#        print(f"Sorry, {name} is not permitted to watch the movie.")
#        names.remove(name)


#print("You can watch a film:", names)

#--------Exercise 10---------------


#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#print("Sorry, we are out of pastrama today! Sorry for inconvenience :(")

#while "Pastrami sandwich" in sandwich_orders:
#    sandwich_orders.remove("Pastrami sandwich")

#finished_sandwich = []

#while sandwich_orders:
#    order = sandwich_orders.pop(0)
#    print(f"{order} is ready")
#    finished_sandwich.append(order)

#print("All sandwiches is ready!")




