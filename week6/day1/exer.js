// EXERCISE #1
//function funcOne() {
//    let a = 5;
//    if (a > 1) {
//        a = 3;
//    }
//    alert(`inside the funcOne function ${a}`); // Prediction: 3
//}

// #1.1 - run in the console:
//funcOne()
// The alert will show "inside the funcOne function 3" because the initial value of a (5) is greater than 1, so it gets reassigned to 3.

// #1.2 What will happen if the variable is declared
// with const instead of let ?
// If the variable a is declared with const, it will cause an error because you cannot reassign a constant variable.

//#2
//let a = 0;
//function funcTwo() {
//    a = 5;
//}

//function funcThree() {
//    alert(`inside the funcThree function ${a}`); // Prediction: 0 (first call), 5 (second call)
//}

// #2.1 - run in the console:
//funcThree() // The alert will show "inside the funcThree function 0" because a is initially 0.
//funcTwo() // This sets a to 5.
//funcThree() // The alert will show "inside the funcThree function 5" because funcTwo has set a to 5.

// #2.2 What will happen if the variable is declared
// with const instead of let ?
// If the variable a is declared with const, funcTwo will cause an error because you cannot reassign a constant variable.

//#3
//function funcFour() {
//    window.a = "hello";
//}

//function funcFive() {
//    alert(`inside the funcFive function ${a}`); // Prediction: "hello"
//}

// #3.1 - run in the console:
//funcFour()
//funcFive()
// The alert will show "inside the funcFive function hello" because funcFour sets the global variable a to "hello".

//#4
//let a = 1;
//function funcSix() {
//    let a = "test";
//    alert(`inside the funcSix function ${a}`); // Prediction: "test"
//}

// #4.1 - run in the console:
//funcSix()
// The alert will show "inside the funcSix function test" because the a inside funcSix is a new local variable.

// #4.2 What will happen if the variable is declared
// with const instead of let ?
// If the variable a is declared with const inside funcSix, the alert will still show "inside the funcSix function test" because it's a separate constant variable local to the function.

//#5
//let a = 2;
//if (true) {
//    let a = 5;
//    alert(`in the if block ${a}`); // Prediction: 5
//}
//alert(`outside of the if block ${a}`); // Prediction: 2

// #5.1 - run the code in the console
// The first alert will show "in the if block 5" because the a inside the if block is a new local variable.
// The second alert will show "outside of the if block 2" because the a outside the if block remains unchanged.

// #5.2 What will happen if the variable is declared
// with const instead of let ?
// If the variable a is declared with const inside the if block, it will still work the same way because the scope and the immutability of a const variable do not interfere here.


//Exercise #2


//function winBattle() {
//   return true;
//}

//const winBattle = () => true;
//const expierencePoints = winBattle() ? 10 : 1;

//console.log(expierencePoints);


//Exercise #3

//const isString = (value) => typeof value === 'string';

//console.log(isString(5));
//console.log(isString('hello'));

//Exercise #4

//const sum = (a, b) => a + b;

//Exercise #5

//function kgtoGrams(weightinKg) {
//    return weightInKG * 1000;
//}
//console.log(kgtoGrams(2));

//const kgtoGramsExpression = function(weightInKG) {
//    return weightInKG * 1000;
//}
//console.log(kgtoGramsExpression(2));

//const kgtoGramsArrow = (weightInKG) => weightInKG * 1000;
//console.log(kgtoGramsArrow(2));


//Exercise #6

//(function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
//    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
//    document.getElementById('prediction').innerText = sentence;
//})(3, 'Alex', 'New York', 'Software Developer');

//Exercise #7

//(function (userName) {
//    const navbar = document.getElementById('navbar');
//    const userDiv = document.createElement('div');

//    const userImage = document.createElement('img');
//    userImage.src = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg';
//    userImage.alt = ProfilePhoto;
//    userImage.width = 30;
//    userImage.height = 30;

//    const userNameText = document.createTextNode(userName);

//    userDiv.appendChild(userImage);
//    userDiv.appendChild(userNameText);
//    navbar.appendChild(userDiv);
//})('Bobby');


//Exercise #8
//Part 1
//function makeJuice(size) {
//    function addIngredients(ingredient1, ingredient2, ingredient3) {
//        document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.<br>`;
//    }

//    addIngredients('apple', 'banana', 'orange');
//}
//makeJuice('medium');

//Part 2

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredients.join(', ')}.<br>`;
    }


    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'mango');


    displayJuice();
}
makeJuice('large');
