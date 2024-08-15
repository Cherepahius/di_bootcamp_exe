//Exercise.1
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, World!";
    }
}
console.log(greet());
console.log(greet("John"));
