class Text:
    def __init__(self, text):
        self.text = text
        self.words = self.text.split()

    def word_frequency(self, word):
        count = self.words.count(word)
        if count == 0:
            return f"The word {word} does not exist in the text."
        else:
            return f"The word {word} appears {count} times in the text."

    def most_common_word(self):
        from collections import Counter
        word_counts = Counter(self.words)
        most_common = word_counts.most_common(1)
        if most_common:
            return most_common[0][0]
        else:
            return "No words found in the text."

    def unique_words(self):
        unique_words_set = set(self.words)
        return list(unique_words_set)    
    
    def from_file(filename):
        with open(filename) as file:
            text = file.read()
            return Text(text)

       
text_instance = Text.from_file("the_strangers.txt")

print("The most common word in the text is:", text_instance.most_common_word())
print("The frequency of the word 'tree' in the text is:", text_instance.word_frequency("sad"))
print("The unique words in the text are:", text_instance.unique_words())