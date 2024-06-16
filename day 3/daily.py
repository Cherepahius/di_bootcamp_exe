#Exercise 1

#def create_index_dictionary(word):
#    index_dict = {}
#    for index, letter in enumerate(word):
#        if letter in index_dict:
#            index_dict[letter].append(index)
#        else:
#            index_dict[letter] = [index]
#    return index_dict

#user_input = input("Please enter a word: ")
#index_dictionary = create_index_dictionary(user_input)
#print(index_dictionary)

#Exercise 2

def clean_price(price):
    return float(price.replace('$', '').replace(',', ''))

def affordable_items(wallet, store_items):
    affordable = []
    for item, price in store_items.items():
        if clean_price(price) <= wallet:
            affordable.append(item)
    
    if not affordable:
        return "Nothing"
    else:
        affordable.sort()
        return affordable

store_items = {
    "Apple": "$4",
    "Banana": "$5",
    "Fan": "$14",
    "Oranges": "$8.00",
    "Pan": "$100.00",
    "Spoon": "$2.00",
    "Speakers": "$300",
    "PC": "$1200",
}

wallet = float(input("Enter the amount of money in your wallet: "))

affordable = affordable_items(wallet, store_items)
print(affordable)