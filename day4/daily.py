matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

def decrypt_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    message = ""
    
    for col in range(cols):
        for row in range(rows):
            char = matrix[row][col]
            if char.isalpha():
                message += char
            elif message and message[-1] != ' ':
                message += ' '
    
    message = message.strip()
    
    
    return message

hidden_message = decrypt_matrix(matrix)
print(hidden_message)
