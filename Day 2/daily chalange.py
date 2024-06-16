#--------Exercise 1---------------

#number = int(input("Please enter the number: "))
#length = int(input("Please enter the length: "))

#multiples = []
#for i in range(1, length + 1):
#    multiples.append(number * i)

#print(multiples) 


#--------Exercise 2---------------

def remove_extra_letters(word):
    if not word:
        return()
    
    clean_word = word[0]

    for i in range(1, len(word)):
        if word[i] !=word[i - 1]:
            clean_word += word[i]
    return clean_word
user_input = input("Enter a word:")

clean_word = remove_extra_letters(user_input)
print(f"Your word: {user_input}")
print(f"Correct word: {clean_word}")