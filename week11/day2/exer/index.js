//Exercise.1
//class Person {
//    private firstName: string;
//    private lastName: string;
//    public age: number;
//    protected address: string;
//    constructor(firstName: string, lastName: string, age: number, address: string) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.age = age;
//        this.address = address;
//    }
//    public getFullName(): string {
//        return `${this.firstName} ${this.lastName}`;
//    }
//}
//const person = new Person("John", "Doe", 30, "123 Main St");
//console.log(person.getFullName());
//console.log(person.age);
//Exercise.2
//interface Vehicle {
//    make: string;
//    model: string;
//    start(): string;
//}
//interface Car extends Vehicle {
//    numberOfDoors: number;
//}
//class Sedan implements Car {
//    make: string;
//    model: string;
//    numberOfDoors: number;
//    constructor(make: string, model: string, numberOfDoors: number) {
//        this.make = make;
//        this.model = model;
//        this.numberOfDoors = numberOfDoors;
//    }
//    start(): string {
//        return `${this.make} ${this.model} is starting.`;
//    }
//}
//const myCar = new Sedan("Toyota", "Camry", 4);
//console.log(myCar.start());
//console.log(myCar.numberOfDoors);
//Exercise.3
//function combineObjects<T, U>(obj1: T, obj2: U): T & U {
//    return { ...obj1, ...obj2 };
//}
//const object1 = { name: "Alice" };
//const object2 = { age: 25 };
//const combinedObject = combineObjects(object1, object2);
//console.log(combinedObject);
//Exercise.4
//class Stack<T> {
//    private items: T[] = [];
//    push(item: T): void {
//        this.items.push(item);
//    }
//    pop(): T | undefined {
//        return this.items.pop();
//    }
//    isEmpty(): boolean {
//        return this.items.length === 0;
//    }
//}
//const stack = new Stack<number>();
//stack.push(1);
//stack.push(2);
//console.log(stack.pop());
//console.log(stack.isEmpty());
//Exercise.5
function filterArray(array, predicate) {
    return array.filter(predicate);
}
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
