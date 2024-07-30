const _ = require("lodash");
const math = require("./math");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = math.add(10, 20);
const product = math.multiply(10, 20);

const lodashSum = _.sum(numbers);
const lodashProduct = _.reduce(numbers, (acc, val) => acc * val, 1);

console.log('Sum:', sum);
console.log('Product:', product);
console.log('Lodash Sum:', lodashSum);
console.log('Lodash Product:', lodashProduct);
