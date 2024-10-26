console.log("== Implicit Conversion ==");
console.log(4 + '2')
console.log('4' + 2)
console.log('4' + '2')
console.log('4' - '2')
console.log('4' * '2')
console.log('4' / '2')
console.log('4' * 2)
console.log('4' / 2)
console.log('Web' + 'Development')
console.log('Web' - 'Development') // If try non numeric value it will give NaN
console.log('5' - true) // Boolean value with numeric string false treated as 0 and true treated as 1
console.log('5' - false) 
console.log('5' - null) // If use null with subtraction it treated as 0
console.log(5 + undefined)

console.log("== Explicit Conversion ==");
console.log("// Number Global methods");
console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))

console.log(parseInt('5'))
console.log(parseFloat('3.14444444444'))

console.log("// String Global methods");
console.log(String(500)) // print 500 as a string
console.log(String(true))
console.log(String(null))
console.log(String(undefined))

console.log((500).toString()) // toString() will not work with null and undefined
/* console.log((null).toString()) */ // TypeError: Cannot read properties of null (reading 'toString')
/* console.log((undefined).toString()) */ // TypeError: Cannot read properties of undefined (reading 'toString')

console.log("// Boolean Global methods");
console.log(Boolean(10)) 
console.log(Boolean("WEB DEVELOPMENT")) 
console.log("null undefined 0 '' NaN all return false and converted to boolean")
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(NaN))