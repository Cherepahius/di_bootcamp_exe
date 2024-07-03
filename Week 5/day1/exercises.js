//Ex.1
//const people = ["Greg", "Mary", "Devon", "James"];
//Part 1

//Tsk1
//const people = ["Greg", "Mary", "Devon", "James"];
//people.shift();
//console.log(people);
//Tsk2
//people[people.indexOf("James")] = "Jason";
//Tsk3
//people.push("Dima")
//console.log(people)
//Tsk4
//console.log(people.indexOf("Mary"));
//Tsk5
//const copy = people.slice(0, 4);
//console.log(copy)
//Tsk6
//console.log(people.indexOf("Foo"));
// -1 cause Foo is not in the array
//Tsk7
//const last = people[people.length - 1];
//console.log(last)

//Part 2

//Tsk1
//for (let i = 0; i < people.length; i++) {
//    console.log(people[i])
//}

//Tsk2
//for (let i = 0; i < people.length; i++) {
//    console.log(people[i])
//    if (people[i] === "Devon") {
//        break
//    }
//}

//Ex.2

//const colors = ["Red", "Green", "Blue", "Orange", "Purple"];
//const suffixes = ["st", "nd", "rd", "th", "th"];
//
//for (let i = 0; i < colors.length; i++) {
//    let suffix = suffixes[i] || 'th';
//    console.log(`My #${i + 1}${suffix} choice is ${colors[i]}`);
//}

//Ex.3


//let number;

//do {
//    number = prompt("Enter a number");
//    number = Number(number);
//    if (typeof number === "number" && !isNaN(number)) {
//        if (number < 10) {
//            console.log("The number is less than 10");
//        }
//        else if (number > 10) {
//            console.log("The number is greater than 10! Thank you!");
//        }
//        else if (number === 10) {
//            console.log("The number is equal to 10");
//
//        }
//    } else {
//        console.log("The number is not valid.Please try again");
//    }
//}
//while (number < 10 || isNaN(number))


//Ex.4

//const building = {
//    numberOfFloors: 4,
//    numberOfAptByFloor: {
//        firstFloor: 3,
//        secondFloor: 4,
//        thirdFloor: 9,
//        fourthFloor: 2,
//    },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//    numberOfRoomsAndRent: {
//        sarah: [3, 990],
//        dan: [4, 1000],
//        david: [1, 500],
//    },
//}

//console.log(building.numberOfFloors);

//console.log(building.numberOfAptByFloor.firstFloor);
//console.log(building.numberOfAptByFloor.thirdFloor);

//const secondTenant = building.nameOfTenants[1];
//const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
//console.log(secondTenantRooms);
//console.log(secondTenant)

//const SarahRent = building.numberOfRoomsAndRent.sarah[1];
//const DavidRent = building.numberOfRoomsAndRent.david[1];
//const DanRent = building.numberOfRoomsAndRent.dan[1];

//if (SarahRent + DavidRent > DanRent) {
//    building.numberOfRoomsAndRent.dan[1] = 1200;
//}

//console.log(building.numberOfRoomsAndRent.dan[1]);


//Ex.5

//const family = {
//    Father: "Bob",
//    Mother: "Sally",
//    Son: "Gary",
//    Daughter: "Sally"
//}

//for (let key in family) {
//   console.log(key)
//}

//for (let key in family) {
//    console.log(family[key])
//}


//Ex.6

//const details = {
//    my: 'name',
//    is: 'Rudolf',
//    the: 'reindeer'
//}

//let sentence = '';

//for (let key in details) {
//   if (sentence !== '') {
//        sentence += ' ';
//    }
//    sentence += key + ' ' + details[key];
//}

//console.log(sentence);

//Ex.7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const FirstNameLetters = names.map(name => name[0]);

FirstNameLetters.sort;

const SecretSocietyName = FirstNameLetters.join('');

console.log(SecretSocietyName);





