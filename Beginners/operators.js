// Assignment operator
console.log("// Assignment operator ");
let x = 10 // Assigns the value 10 to variable x
let y = 5 // Assigns the value 5 to variable y
console.log("x = " + x + " y = " + y); // Output: x = 10 y = 5
console.log("===============================");
// Arithmetic operator
console.log("// Arithmetic operator ");
console.log("x + y = " + (x + y)) // Output: x + y = 15
console.log("x - y = " + (x - y)) // Output: x - y = 5
console.log("x / y = " + (x / y)) // Output: x / y = 2
console.log("x * y = " + (x * y)) // Output: x * y = 50
console.log("x % y = " + (x % y)) // Output: x % y = 0
console.log("(x**y) = " + (x**y)) // Output: (x**y) = 100000
console.log("(++x) = " + (++x)) // Output: (++x) = 11
console.log("(x++) = " + (x++)) // Output: (x++) = 11
console.log("(--y) = " + (--y)) // Output: (--y) = 4
console.log("(y--) = " + (y--)) // Output: (y--) = 4
console.log("===============================");
// Comparison operator
console.log("// Comparison operator ");
console.log("(x == y) = " + (x == y)) // Output: (x == y) = false
console.log("(x != y) = " + (x != y)) // Output: (x != y) = true
// Compares datatypes also
console.log("(x === y) = " + (x === y)) // Output: (x === y) = false
// Compares datatypes also
console.log("(x !== y) = " + (x !== y)) // Output: (x !== y) = true
console.log("(x > y) = " + (x > y)) // Output: (x > y) = true
console.log("(x >= y) = " + (x >= y)) // Output: (x >= y) = true
console.log("(y < x) = " + (y < x)) // Output: (y < x) = true
console.log("(y <= x) = " + (y <= x)) // Output: (y <= x) = true
console.log("===============================");
// Logical operator
console.log("// Logical operator ");
let isValidNumber = (x > 8 && 8 > y) // If both condition are correct returns true otherwise false
console.log("(x > 8 && 8 > y) = " + isValidNumber) // Output: (x > 8 && 8 > y) = true
let isValidCheck = (x > 20 || 8 > y) // If one of condition is correct returns true otherwise false
console.log("(x > 20 || 8 > y) = " + isValidCheck) // Output: (x > 20 || 8 > y) = true
let isValid = false
console.log("(!isValid) = " + !isValid) // Output: (!isValid) = true
console.log("===============================");
// String operator
console.log("// String operator ");
console.log("Richa " + "webDev") // Output: Richa webDev
console.log(10 + 5) // Output: 15
console.log("===============================");
// Ternary operator
console.log("// Ternary operator ");
const isEven = 10 % 2 === 0 ? "Number is even" : "Number is old"
console.log("isEven = " + isEven) // Output: isEven = Number is even
console.log("===============================");
/* Brain teaser */
console.log("// Brain teaser: Explain why the output of the code snippet, involving the num++, --num, and num-- operations, results in the value 21 ");
let num = 20
console.log("num = " + num) // Output: (++num) = 21
console.log("(++num) = " + (++num)) // Output: (++num) = 21
console.log("(num++) = " + (num++)) // Output: (num++) = 21
console.log("(--num) = " + (--num)) // Output: (--num) = 21
console.log("(num--) = " + (num--)) // Output: (num--) = 21