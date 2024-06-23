class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file) as file:
            self.words = set(word.strip() for word in file)

    def is_valid_word(self, word):
        return word in self.words

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w) and w != word]
    
    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)




import re
from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('sowpods.txt')

    while True:
        print("Menu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ").strip()

        if choice == '1':
            user_input = input("Enter a word: ").strip()
            if not is_valid_input(user_input):
                print("Invalid input. Please enter a single alphabetic word.")
                continue
            
            word = user_input.lower()
            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is a valid English word.")
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}.")
                else:
                    print("No anagrams found.")
            else:
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is not a valid English word.")
        
        elif choice == '2':
            print("Exiting...")
            break
        else:
            print("Invalid option. Please choose 1 or 2.")

def is_valid_input(input_string):
    return re.match("^[a-zA-Z]+$", input_string) is not None

if __name__ == "__main__":
    main()