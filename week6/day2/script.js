//Exersice.1

//const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//colors.forEach((color, index) => {
//    console.log(`${index + 1}# choice is ${color}.`);
//});

//if (colors.includes("Violet")) {
//    console.log("Yeah");
//} else {
//    console.log("No...");
//}

//Exersice.2

//const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//const ordinal = ["th", "st", "nd", "rd"];

//colors.forEach((color, index) => {

//    const suffix = (index + 1) % 10 === 1 && (index + 1) !== 11 ? ordinal[1] :
//        (index + 1) % 10 === 2 && (index + 1) !== 12 ? ordinal[2] :
//            (index + 1) % 10 === 3 && (index + 1) !== 13 ? ordinal[3] :
//                ordinal[0];

//    console.log(`${index + 1}${suffix} choice is ${color}.`);
//});

//Exersice.3

//------1------
//const fruits = ["apple", "orange"];
//const vegetables = ["carrot", "potato"];

//const result = ['bread', ...vegetables, 'chicken', ...fruits];
//console.log(result);

//Result will be - ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


//------2------
//const country = "USA";
//console.log([...country]);

//Result will be - ['U', 'S', 'A']

//------Bonus------
//let newArray = [...[, ,]];
//console.log(newArray);

//Result will be - [,,]


//Exersice.4

//const users = [
//    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
//    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
//];

//const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
//console.log(welcomeStudents);

//const fullstackResident = users.filter(user => user.role === 'Full Stack Resident');
//console.log(fullstackResident);

//const fullstackResidentLastNames = users
//    .filter(user => user.role === 'Full Stack Resident')
//    .map(user => user.lastName);
//console.log(fullstackResidentLastNames);


//Exersice.5

//const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

//const result = epic.reduce((accumulator, currentValue) => {
//   return accumulator + ' ' + currentValue;
//});

//console.log(result);

//Exersice.6

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

const passedStudents = students.filter(student => student.isPassed);

passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});