function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    for (var i = 0; i < allowedTypes.length; i++) {
        if (allowedTypes[i] === valueType) {
            return true;
        }
    }
    return false;
}
var stringValue = "Hello, World!";
var numberValue = 42;
var booleanValue = true;
var objectValue = { name: "John" };
var arrayValue = [1, 2, 3];
console.log(validateUnionType(stringValue, ["string", "number"]));
console.log(validateUnionType(numberValue, ["string", "boolean"]));
console.log(validateUnionType(booleanValue, ["boolean", "object"]));
console.log(validateUnionType(objectValue, ["string", "object"]));
console.log(validateUnionType(arrayValue, ["string", "array"]));
