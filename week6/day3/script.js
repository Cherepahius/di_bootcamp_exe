//Exercise.1

//const person = {
//    name: 'John Doe',
//    age: 25,
//    location: {
//        country: 'Canada',
//        city: 'Vancouver',
//        coordinates: [49.2827, -123.1207]
//    }
//}

//const { name, location: { country, city, coordinates: [lat, lng] } } = person;

//console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// the Results will be:

//The person object is defined with properties name, age, and location.
//The location property is itself an object containing country, city, and coordinates.
//The code destructures the person object to extract the name, country, city, and the first two elements of the coordinates array, assigning them to variables lat and lng.
//Exercise.2

//function displayStudentInfo({ first, last }) {
//    return `Your full name is ${first} ${last}`;
//}
//
//console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

//Exercise.3

//const users = { user1: 18273, user2: 92833, user3: 90315 };

//const usersArray = Object.entries(users);

//console.log(usersArray)

//const modif = usersArray.map(([key, value]) => ({ [key]: value * 2 }));
//console.log(modif)

//Exercise.4

//class Person {
//    constructor(name) {
//        this.name = name;
//    }
//}

//const member = new Person('John');
//console.log(typeof member);
//The output will be 'object'
//Exercise.5
//class Dog {
//    constructor(name) {
//        this.name = name;
//    }
//};
//class Labrador extends Dog {
//    constructor(name, size) {
//        super(name);
//        this.size = size;
//    }
//}

// Only this option will work

//Exercise.6

//[2] === [2] - will result in false because they are different objects in memory;

//{} === {} - will result in false because they are different objects in memory;

//const object1 = { number: 5 };
//const object2 = object1;
//const object3 = object2;
//const object4 = { number: 5 };

//object1.number = 4;
//console.log(object2.number) // - 4 because of //object1.number = 4;
//console.log(object3.number) // - 4 because it is the same as object2.number 
//console.log(object4.number) // - 5 because of const object4 = { number: 5 };

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color
    }
}

class Mamal extends Animal {
    sound(sound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mamal('Farmer Cow', 'cow', 'white');
console.log(farmerCow.sound('moo'));