// Assignment operator
console.log("// Assignment operator ");
let x = 10 // = 
let y = 5
console.log("===============================");
// Arithmetic operator
console.log("// Arithmetic operator ");
console.log("+ :: " + (x + y))
console.log("- :: " + (x - y))
console.log("/ :: " + (x / y))
console.log("* :: " + (x * y))
console.log("% :: " + (x % y))
console.log("++ (before):: " + (++x))
console.log("++ (after):: " + (x++))
console.log("-- (before):: " + (--x))
console.log("-- (after):: " + (x--))
console.log("===============================");
// Comparison operator
console.log("// Comparison operator ");
console.log("== :: " + (x == y))
console.log("!= :: " + (x != y))
console.log("=== :: " + (x === y)) // Compares datatypes also
console.log("!== :: " + (x !== y)) // Compares datatypes also
console.log("> :: " + (x > y))
console.log(">= :: " + (x >= y))
console.log("< :: " + (y < x))
console.log("<= :: " + (y <= x))
console.log("===============================");
// Logical operator
console.log("// Logical operator ");
let isValidNumber = (x > 8 && 8 > y) // If both condition are correct returns true otherwise false
console.log("&& :: " + isValidNumber)
let isValidCheck = (x > 20 || 8 > y) // If one of condition is correct returns true otherwise false
console.log("|| :: " + isValidCheck)
let isValid = false
console.log("! :: " + !isValid)
console.log("===============================");
// String operator
console.log("// String operator ");
console.log("Richa " + "Parekh")
console.log("===============================");
// Ternary operator
console.log("// Ternary operator ");
const isEven = 10 % 2 === 0 ? "Number is even" : "Number is old"
console.log(isEven)