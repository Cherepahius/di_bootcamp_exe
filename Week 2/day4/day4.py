#Exercise 1

#def display_message():
#    print("I am learning about functions and how to write and call them in Python.")
# Call the function to display the message
#display_message()

#Exercise 2

#def favorite_book(title):
#    print(f"My favorite book is {title}")
#favorite_book("The Shining by Stephen King")    

#Exercise 3

#def des_city(city, country="Iceland"):
#    print(f"{city} is in {country}")
#des_city("Reykjavik")
#des_city("Tokio", "Japan")
#des_city("Kiev, Ukraine")
#des_city("Jerusalem","Israel")

#Exercise 4

#import random
#def compare_numbers(): 
#    user_input = int(input("Please enter a number between 1 and 100: "))
#    if 1 <= user_input <= 100:
#        random_number = random.randint(1, 100)
#        if user_input == random_number:
#            print(f"Success! Both numbers are {user_input}.")
#        elif user_input != random_number:
#            print(f"Fail! Your number: {user_input}, Random number: {random_number}")
           
#compare_numbers()


#Exercise 5

#def make_shirt(size, text):
#    print(f"The size of the shirt is {size} and the text is {text}")

#make_shirt("large","lorem1")
#make_shirt("medium","lorem2")
#make_shirt("small","lorem3")
#make_shirt()

#def make_shirt(size = "large", text = "I love Python"):
#        print(f"The size of the shirt is {size} and the text is {text}")
#make_shirt(size="medium")


#Exercise 6

#magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#
#def show_magicians():
#    for magician in magician_names:
#        print(magician)
#
#def make_great():
#    for i in range(len(magician_names)):
#        magician_names[i] += " the Great" 

#make_great()
#show_magicians()


#Exercise 7

#import random
#def get_random_temp(seasons):
#    if seasons == 'spring' or seasons ==  'fall' or seasons == 'autumn':
#        return random.uniform(-15.0, 20.0)
#    elif seasons == 'summer':
#        return random.uniform(20.0, 40.0)
#    elif seasons == 'winter':
#        return random.uniform(-20.0, 5.0)
    
#def months(month):
#    if month in [12, 1, 2]:
#        return 'winter'
#    if month in [3, 4, 5]:
#        return 'spring'
#    if month in [6, 7, 8]:
#        return 'summer'
#    if month in [9, 10, 11]:
#        return 'autumn'
   
#def main():
#    month = int(input("Enter the month of the year: "))
#    seasons = months(month)
#    temperature = get_random_temp(seasons)
#    print(f"The temperature is {temperature} degrees Celsius")
#    if temperature < 0:
#        print("Cold")
#    elif 0 < temperature < 16.0:
#        print("Chilly")
#    elif 16.0 < temperature < 24.0:
#        print("Nice")
#    elif 24.0 < temperature < 32.0:
#        print("Warm")
#    elif temperature >= 32.0:
#        print("Hot")
#main()


#Exercise 8


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    print("Take part in our Star Wars Quiz!")
    print("Answer the questions and win prizes!!!")

    for question_data in data:
        question = question_data["question"]
        correct_answer = question_data["answer"] 

        user_answer = input(question + " ")
        
        if user_answer.lower() == correct_answer.lower():
            print("Gratz!")
            correct_answers += 1
        else:
            print("Buuuuuuuuu!")
            incorrect_answers += 1
            wrong_answers.append({
                "question": question,
                "user_answer": user_answer,
                "correct_answer": correct_answer
            })

    display_results(correct_answers, incorrect_answers, wrong_answers)

def display_results(correct_answers, incorrect_answers, wrong_answers):
    print("Quiz Results:")
    print(f"Correct answers: {correct_answers}")
    print(f"Incorrect answers: {incorrect_answers}")

    if incorrect_answers > 0:
        print("Here are the questions you answered incorrectly:")
        for idx, answer in enumerate(wrong_answers, 1):
            print(f"{idx}. Question: {answer['question']}")
            print(f"   Your Answer: {answer['user_answer']}")
            print(f"   Correct Answer: {answer['correct_answer']}")

    if incorrect_answers > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no): ").strip().lower()
        if play_again == 'yes':
            quiz()
        else:
            print("Thank you for playing!")
quiz()

           

