let sentence = "The movie is not bad, I like it";

let wordnot = sentence.indexOf("not");
let wordbad = sentence.indexOf("bad");

if (wordnot != -1 && wordbad != -1 && wordbad > wordnot) {
    let newsetence = sentence.replace("not bad", "good");
    console.log(newsetence);
} else {
    console.log(sentence);
}