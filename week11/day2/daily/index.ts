function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    for (let i = 0; i < allowedTypes.length; i++) {
        if (allowedTypes[i] === valueType) {
            return true;
        }
    }
    return false;
}


const stringValue = "Hello, World!";
const numberValue = 42;
const booleanValue = true;
const objectValue = { name: "John" };
const arrayValue = [1, 2, 3];

console.log(validateUnionType(stringValue, ["string", "number"]));
console.log(validateUnionType(numberValue, ["string", "boolean"]));
console.log(validateUnionType(booleanValue, ["boolean", "object"]));
console.log(validateUnionType(objectValue, ["string", "object"]));
console.log(validateUnionType(arrayValue, ["string", "array"])); 
