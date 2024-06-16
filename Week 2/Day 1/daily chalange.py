user_input = (input("Enter a 10-letters length string: "))
if len(user_input) < 10:
    print("U need to add some letters so it will be a  10-units length string")
elif len(user_input) > 10:
    print("U need to delete some letters so it will be a 10-units length string") 
else:
    print("You are great!")      

print(f"First character is - {user_input[0]}") 
print(f"Last character is - {user_input[-1]}") 

import random

s=user_input
s_shuffled = "".join(random.sample(s, len(s)))
print(s_shuffled + " - is your input shuffled")


string = input("enter the string: ")
length = len(string)
for row in range(length):
    for col in range(row+1):
        print(string[col], end ="")
    print()