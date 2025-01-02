function greet(username){
    console.log("Hello! Good morning " + username)
}
greet('Richa') 
greet('Mike')
greet('Aly')
/* Output:
Hello! Good morning Richa
Hello! Good morning Mike
Hello! Good morning Aly */

console.log("// Function Declaration ")
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

console.log("// Function Expression ")
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 2)); // Output: 8

console.log("// Arrow functions :: Introduce in 2015 ")
const addNumber = (a, b) => {
    return a + b
}
const result2 = addNumber(20, 10)
console.log(result2)

// If one line of code to execute in function
const MultiNumber = (a, b) => a * b
const result3 = MultiNumber(20, 10)
console.log(result3)

// One argument
const divideNumber = (num) => num / 2
const result4 = divideNumber(20)
console.log(result4)

console.log("// Anonymous Functions ")
setTimeout(function() {
    console.log("This message appears after 2 seconds");
}, 2000);

console.log("// Callback Functions ")
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double)); // Output: 10

console.log("// Nested Functions ")
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5)); // Output: 15
