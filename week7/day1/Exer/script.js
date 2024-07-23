//Exer.1

//function comparetoten(num) {
//    return new Promise((resolve, reject) => {
//        if (num <= 10) {
//            resolve('${num} is less than or equal to 10');
//        } else {
//            reject('${num} is greater than 10');
//        }
//    });
//}

//comparetoten(15)
//    .then(result => console.log(result))
//    .catch(error => console.log(error))
//comparetoten(5)
//    .then(result => console.log(result))
//    .catch(error => console.log(error))

//Exer.2

//function resolveafter4seconds() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve('resolved');
//        }, 4000);
//    });
//}
//resolveafter4seconds().then((data) => console.log(data));


//Exer.3

//const Promiseresolved = Promise.resolve(3);
//const Promiserejected = Promise.reject('Boo');

//Promiseresolved.then(value => {
//console.log("Resolved with: ", value);
//})

//Promiserejected.catch(error => {
//    console.log("Rejected with: ", error);
//})

