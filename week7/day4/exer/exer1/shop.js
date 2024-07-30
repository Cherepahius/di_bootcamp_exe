const products = require('./products');

function findProductByName(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        console.log(`Product found: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log('Product not found');
    }
}


findProductByName('Laptop');
findProductByName('Smartphone');
findProductByName('Coffee Maker');
findProductByName('Headphones');
findProductByName('Desk Lamp');
findProductByName('Tablet');