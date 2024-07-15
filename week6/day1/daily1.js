let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}
const cloneGroceries = () => {
    let user = client;
    client = "Betty";

    console.log("Client:", client);
    console.log("User:", user);


    let shopping = groceries;

    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    console.log("Groceries Total Price:", groceries.totalPrice);
    console.log("Groceries Paid Status:", groceries.other.paid); false
}


displayGroceries();
cloneGroceries();
