/* String */
console.log("== String ==");
const fname = 'Richa'; // Single quotes
const language = "JavaScript"; // Double quotes
const study = `webDev`; // Backticks
console.log(fname, language, study); // Output: Richa JavaScript webDev

/* Number */
console.log("== Number ==");
const total = 0;
const PI = 3.14;
console.log(total, PI); // Output: 0 3.14

/* Bigint */
console.log("== Bigint ==");
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n

/* Boolean */
console.log("== Boolean ==");
const isPrimeNumber = true;
const isNewUser = false;
console.log(isPrimeNumber, isNewUser); // Output: true false

/* undefined */
console.log("== undefined ==");
let result;
console.log(result); // Output: undefined
/* let result = undefined // SyntaxError: Identifier 'result' has already been declared 
console.log(result) */
let result_1 = undefined;
console.log(result_1); // Output: undefined

/* Null */
console.log("== Null ==");
const data = null;
console.log(data); // Output: null

/* Object */
console.log("== Object ==");
// object literal
const person = {
    firstName: "Richa",
    lastName: "webDev",
    age: 50
};
// dot (.) notation for access properties
console.log(person.firstName); // Output: Richa 

/* Array */
console.log("== Array ==");
const num = [1,3,4,6,8];
// access data using index
console.log(num[0]); // Output: 1  

/* Dynamically typed language */
console.log("== Dynamically typed language ==");
let a = 10;
a = 'string';
a = true;
console.log(a); // Output: true  

/* typeof Operator */
console.log("== typeof Operator ==");
console.log(typeof "Richa"); // Output: string  
console.log(typeof 0); // Output: number  
console.log(typeof 123); // Output: number  
console.log(typeof 123.12); // Output: number  
console.log(typeof (12 + 8)); // Output: number  
console.log(typeof true); // Output: boolean  
console.log(typeof 25n); // Output: bigint  
console.log(typeof undefined); // Output: undefined  
console.log(typeof null); // Output: object. The behavior of typeof is wrong here, That’s an officially recognized error in typeof  
console.log(typeof Symbol("uId")); // Output: symbol  
console.log(typeof function(){}); // Output: function  
console.log(typeof Math); // Output: object  