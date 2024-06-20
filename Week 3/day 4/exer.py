#Ex.1

import random

def get_words(filename):
    with open(filename) as file:
        words = file.read().split()
        return words

def get_random_sentence(words, length):
    random_words = random.sample(words, length)
    sentence = " ".join(random_words)
    return sentence

def main():
    print("Welcome to the Random Sentence Generator!")
    try:
        length = int(input("Enter the length of the sentence: "))
        if not (2 <= length <= 20):
            print("The length must be between 2 and 20.")
            return
        
        words = get_words("exer_text.txt")
        sentence = get_random_sentence(words, length)
        print("Generated sentence:", sentence)
    except ValueError:
        print("Invalid input. Please enter an integer.")
    except FileNotFoundError:
        print("File not found.")
    
if __name__ == "__main__":
    main()        
#Ex.2

#import json

#sampleJson = """{
#    "company":{
#        "employee":{
#            "name":"emma",
#            "payable":{
#                "salary":7000,
#                "bonus":300
#                }
#        }
#    }
#}"""

#data = json.loads(sampleJson)
#print(data["company"]["employee"]["payable"]["bonus"])
#print(f"Salary:{salary}")

#data["company"]["employee"]["birth_date"] = "1990-01-01"

#with open("update_data.json", "w") as file:
#    json.dump(data, file, indent=4)

#print("JSON file updated successfully!")    

