//Ex.1

//function displayNumbersDivisible(divisor) {
//    let sum = 0;
//    for (let i = 0; i <= 500; i++) {
//        if (i % divisor === 0) {
//            console.log(i);
//            sum += i;
//        }
//    }
//    console.log("Sum: " + sum);
//}
//displayNumbersDivisible(23);
//displayNumbersDivisible(3);
//displayNumbersDivisible(45);


//Ex.2


//const stock = {
//    "banana": 6,
//    "apple": 0,
//    "pear": 12,
//    "orange": 32,
//    "blueberry": 1
//}

//const prices = {
//    "banana": 4,
//    "apple": 2,
//    "pear": 1,
//    "orange": 1.5,
//    "blueberry": 10
//}

//const shoppingList = ["banana", "orange", "apple"];

//function myBill() {
//    let total = 0;
//    for (let item of shoppingList) {
//        if (item in stock && stock[item] > 0) {
//            total += prices[item];
//            stock[item] -= 1;
//        }
//    }
//    return total;

//}

//console.log("Your bill is: " + myBill())
//console.log("Stock now: ", stock)


//Ex.3


//function enoughCoins(price, amount) {
//    const quarters = 0.25;
//    const dimes = 0.10;
//    const nickels = 0.05;
//    const pennies = 0.01;

//    const total = (amount[0] * quarters + amount[1] * dimes + amount[2] * nickels + amount[3] * pennies);
//    return total >= price;
//}

//console.log(enoughCoins(14.11, [2, 100, 0, 0]));
//console.log(enoughCoins(0.75, [0, 0, 20, 5]));


//Ex.4

//function hotelCost(nights) {
//    return nights * 140;
//}

//function planetRideCost(destination) {
//    destination = destination.toLowerCase();
//    if (destination === "london") {
//        return 183;
//    } else if (destination === "paris") {
//        return 220;
//    } else {
//        return 300;
//    }
//}

//function rentalCarCost(days) {
//    let cost = days * 40;
//    if (days >= 10) {
//        cost *= 0.95;
//    }
//    return cost;
//}

//function totalVacation() {
//    let nights, destination, days;

//    while (true) {
//        nights = parseInt(prompt("Enter number of nights: "), 10);
//        if (!isNaN(nights) && nights > 0) {
//            break;
//        } else {
//            console.log("Please enter a valid number");
//        }
//    }

//    while (true) {
//        destination = prompt("Enter destination(London, Paris or else): ").trim();
//        if (typeof destination === "string" && destination !== '') {
//            break;
//        } else {
//            console.log("Please enter a valid destination");
//        }
//    }

//    while (true) {
//        days = parseInt(prompt("For how long you want to rent the car: "), 10);
//        if (!isNaN(days) && days > 0) {
//            break;
//        } else {
//            console.log("Please enter a valid number");
//        }
//    }

//    const hotelCostTotal = hotelCost(nights);
//    const planetRideCostTotal = planetRideCost(destination);
//    const rentalCarCostTotal = rentalCarCost(days);
//    const total = hotelCostTotal + planetRideCostTotal + rentalCarCostTotal;

//    console.log("Your total cost is: $" + total,
//        "where the car cost: $" + rentalCarCostTotal,
//        "and the hotel cost: $" + hotelCostTotal,
//        "and the plane ticket will cost you: $" + planetRideCostTotal);
//
//   return total;
//}

//totalVacation();


//Ex.5
const container = document.getElementById('container');
console.log(container);

document.querySelectorAll('.list li')[1].textContent = "Richard";

document.querySelectorAll('.list')[1].children[1].remove();

const myName = 'Dima';
document.querySelectorAll('.list').forEach(ul => {
    ul.children[0].textContent = myName;
});

document.querySelectorAll('.list').forEach(ul => {
    ul.classList.add('student_list');
});

const firstUl = document.querySelector('.list');
firstUl.classList.add('university', 'attended');

container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

document.querySelectorAll('.list')[1].children[1].style.display = 'none';
document.querySelectorAll('.list li')[1].style.border = "1px solid black";

document.body.style.fontSize = '20px';

if (container.style.backgroundColor === 'lightblue') {
    const users = Array.from(document.querySelectorAll('.list li')).map(li => li.textContent);
    console.log('Hello ' + users.join(', '));
}


//Ex.6

//document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');

//const NewList = document.createElement('li');

//const textNode = document.createTextNode('Logout');

//NewList.appendChild(textNode);

//const ulnewelement = document.querySelector('#socialNetworkNavigation ul');
//ulnewelement.appendChild(NewList);

//const firstlistitem = ulnewelement.firstElementChild;
//const lastlistitem = ulnewelement.lastElementChild;
//console.log(firstlistitem.textContent);
//console.log(lastlistitem.textContent);


//Ex.7



//const AllBooks = [
//    {
//        title: "Harry Potter and the Philosopher's Stone",
//        author: "J.K. Rowling",
//        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Harry_Potter_and_the_Philosopher%27s_Stone.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone.jpg",
//        alreadyRead: false
//    },
//    {
//        title: "1984",
//        author: "George Orwell",
//        image: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four#/media/File:1984_first_edition_cover.jpg",
//        alreadyRead: true
//    }
//];

//const bookSection = document.querySelector(".listBooks");
//AllBooks.forEach(book => {
//    const newBook = document.createElement("div");
//    newBook.classList.add("book-details");
//    if (book.alreadyRead) {
//        newBook.classList.add("read");
//    }
//    const bookinfo = document.createElement("p");
//    bookinfo.textContent = `${book.title} by ${book.author}`;
//
//    const bookimg = document.createElement("img");
//    bookimg.src = book.image;
//
//    newBook.appendChild(bookimg);
//    newBook.appendChild(bookinfo);
//    bookSection.appendChild(newBook);
//})








