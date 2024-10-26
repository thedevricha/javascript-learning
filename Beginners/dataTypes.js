/* String */
const name = 'Richa'
const language = "JavaScript"
const study = `IT`
console.log(name, language, study)

/* Number */
const total = 0
const PI = 3.14
console.log(total, PI)

/* Boolean */
const isPrimeNumber = true
const isNewUser = false
console.log(isPrimeNumber, isNewUser)

/* undefined */
let result
console.log(result)
/* let result = undefined // SyntaxError: Identifier 'result' has already been declared 
console.log(result) */
let result_1 = undefined 
console.log(result_1)

/* Null */
const data = null
console.log(data)

/* Object */
// object literal
const person = {
    fistName: "Richa",
    lastName: "Parekh",
    age: 26
}
console.log(person.fistName) // dot (.) notation for access properties

/* Array */
const num = [1,3,4,6,8]
console.log(num[0]) // access data using index

// dynamically typed language
let a = 10
a = 'string'
a = true
console.log(a)