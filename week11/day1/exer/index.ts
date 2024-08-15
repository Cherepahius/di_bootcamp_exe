//Exercise.1

//console.log("Hello, World!");

//Exercise.2

//let userName: string = "John";
//let ageNumber: number = 25;

//console.log(`Name: ${userName}, Age: ${ageNumber}`);

//Exercise.3

//let id: string | number;

//id = "ABC123";
//console.log(`ID: ${id}`);
//id = 12345;
//console.log(`ID: ${id}`);

//Exercise.4

//function checkNumber(num: number): string {
//    if (num > 0) {
//        return "Positive";
//    } else if (num < 0) {
//        return "Negative";
//    } else {
//        return "Zero";
//    }
//}
//console.log(checkNumber(5));
//console.log(checkNumber(-3));
//console.log(checkNumber(0));

//Exercise.5

//function add(a: number, b: number): number;
//function add(a: string, b: string): string;
//function add(a: any, b: any): any {
//    return a + b;
//}

//console.log(add(10, 20));
//console.log(add("Hello ", "World"));

//Exercise.6

//function getDetails(name: string, age: number): [string, number, string] {
//    const greeting = `Hello, ${name}!`;
//    return [name, age, greeting];
//}
//const details = getDetails("John", 25);

//console.log(details);

//Exercise.7

//interface Person {
//    name: string;
//    age: number;
//}

//function createPerson(name: string, age: number): Person {
//    return { name, age };
//}

//const person = createPerson("John", 25);
//console.log(person);

//Exercise.8

//const element = document.getElementById("myInput") as HTMLInputElement;
//element.value = "Hello, World!";

//Exercise.9

//function getAction(role: string): string {
//    switch (role) {
//        case "admin":
//            return "Manage users and settings.";
//        case "editor":
//           return "Edit content.";
//        case "viewer":
//            return "View content.";
//        default:
//            return "No action available.";
//    }
//}

//console.log(getAction("admin"));
//console.log(getAction("editor"));
//console.log(getAction("viewer"));
//console.log(getAction("user"));

//Exercise.10

function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, World!";
    }
}

console.log(greet());
console.log(greet("John"));

