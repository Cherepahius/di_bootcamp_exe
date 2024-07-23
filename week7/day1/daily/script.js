//Exer.1


//function makeAllCaps(words) {
//    return new Promise((resolve, reject) => {
//        if (words.every(word => typeof word === 'string')) {
//            const uppercasedWords = words.map(word => word.toUpperCase());
//            resolve(uppercasedWords);
//        } else {
//            reject('Error: Not all elements are strings!');
//        }
//    });
//}

//function sortWords(words) {
//    return new Promise((resolve, reject) => {
//        if (words.length > 4) {
//            const sortedWords = words.sort();
//            resolve(sortedWords);
//        } else {
//            reject('Error: Array length is not greater than 4!');
//        }
//    });
//}
//makeAllCaps([1, "pear", "banana"])
//    .then((arr) => sortWords(arr))
//    .then((result) => console.log(result))
//    .catch(error => console.log(error)); // Error: Not all elements are strings!

// Test case where the catch method is executed due to array length not greater than 4
//makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//    .then((result) => console.log(result))
//    .catch(error => console.log(error)); // Error: Array length is not greater than 4!

// Test case where the array is uppercased and sorted
//makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//    .then((arr) => sortWords(arr))
//    .then((result) => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
//    .catch(error => console.log(error));


//Exer.2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject(new Error("Morse JavaScript object is empty."));
        } else {
            resolve(morseJS);
        }
    });
}


function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = prompt("Please enter a word or sentence:").toLowerCase();
        const morseTranslation = [];

        for (let char of input) {
            if (morseJS[char] !== undefined) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(new Error(`Character "${char}" doesn't exist in the Morse JavaScript object.`));
                return;
            }
        }
        resolve(morseTranslation);
    });
}

function joinWords(morseTranslation) {
    const morseString = morseTranslation.join("\n");
    const preElement = document.createElement("pre");
    preElement.textContent = morseString;
    document.body.appendChild(preElement);
}


toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
        console.error(error);
        alert(error.message);
    });
