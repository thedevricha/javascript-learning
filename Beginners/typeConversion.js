console.log("== Implicit Conversion ==");
// String Concatenation
console.log(4 + '2') // Output: 42
console.log('4' + 2) // Output: 42
console.log('4' + '2') // Output: 42

// Numeric Conversion in Arithmetic Operations (Converts strings to numbers when dealing with arithmetic (except + operator))
console.log('4' - '2') // Output: 2
console.log('4' * '2') // Output: 8
console.log('4' / '2') // Output: 2
console.log('4' * 2) // Output: 8
console.log('4' / 2) // Output: 2

console.log('Web' + 'Development') // Output: WebDevelopment // Reason: String Concatenation
console.log('Web' - 'Development') // Output: NaN // If try non numeric value it will give NaN
console.log('5' - true) // Output: 4 // Boolean value with numeric string false treated as 0 and true treated as 1
console.log('5' - false) // Output: 5 
console.log('5' - null) // Output: 5 // If use null with subtraction it treated as 0
console.log(5 + undefined) // Output: NaN

console.log("== Explicit Conversion ==");
console.log("// Number Global methods");
console.log(Number('5')) // Output: 5
console.log(Number(false)) // Output: 0
console.log(Number('')) // Output: 0
console.log(parseInt('5')) // Output: 5
console.log(parseFloat('3.14444444444')) // Output: 3.14444444444

console.log("// String Global methods");
console.log(String(500)) // Output: 500 // print 500 as a string
console.log(String(true)) // Output: true
console.log(String(null)) // Output: null
console.log(String(undefined)) // Output: undefined
console.log((500).toString()) // Output: 500 

// toString() will not work with null and undefined. Uncomment code and verify result
/* console.log((null).toString()) */ // TypeError: Cannot read properties of null (reading 'toString')
/* console.log((undefined).toString()) */ // TypeError: Cannot read properties of undefined (reading 'toString')

console.log("// Boolean Global methods");
console.log(Boolean(10)) // Output: true
console.log(Boolean("WEB DEVELOPMENT")) // Output: true 
console.log("// null, undefined, 0, '', NaN all return false and converted to boolean")
console.log(Boolean(null)) // Output: false
console.log(Boolean(undefined)) // Output: false
console.log(Boolean(0)) // Output: false
console.log(Boolean('')) // Output: false
console.log(Boolean(NaN)) // Output: false