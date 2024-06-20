names_list = """Darth
Luke
Darth
Lea
Darth
Lea
Lea
Luke
Darth
Lea
Darth
Darth
Lea
Lea
Darth
Lea
Darth
Lea
Luke
Darth
Lea
Lea
Darth
Lea
Darth
Darth
Lea
Lea
Luke
Luke
Lea
Darth
Darth
Luke
Lea
Darth
Darth
Lea
Lea
Lea
Lea
Lea
Luke
Darth
Luke
Lea
Lea
Lea
Lea
Luke
Lea
Darth
Lea
Lea
Darth
Lea
Lea
Darth
Darth
Lea
Darth
Lea
Darth
Luke
Lea
Luke
Darth
Darth
Luke
Darth
Lea
Darth
Lea
Luke
Lea
Lea
Lea
Lea
Lea
Darth
Lea
Lea
Lea
Lea
Lea
Lea
Lea
Luke
Lea
Lea
Lea
Lea
Lea
Lea
Darth
Luke
Darth
Lea
Lea
Darth"""

lines = names_list.splitlines()

fifth_line = lines[4]
print(fifth_line)

first_five_characters = names_list[0:5]
print(first_five_characters)

names_as_list = names_list.split()
print(names_as_list)

darth_count = names_list.count("Darth")
print(darth_count)

leia_count = names_list.count("Lea")
print(leia_count)

luke_count = names_list.count("Luke")
print(luke_count)

names_as_list.append("Dima")

update_names_list = []
for name in names_as_list:
    update_names_list.append(name)
    if name == "Luke":
        update_names_list.append("Skywalker")

print(update_names_list)
