/* Implement a calculator that can perform operations like addition, subtraction, etc., using curried functions. */

// The calculator function = curried function and  takes one argument: operation.
const calculator = (operation) => (a) => (b) => {
    switch(operation){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return null;
    }
}

// Call the calculator Function
const add = calculator('add')(5)
// Call the Returned Function
console.log(add(3))

const subtract = calculator('subtract')(10); // Create a function for subtracting from 10
console.log(subtract(4)); // Outputs: 6

const multiply = calculator('multiply')(2); // Create a function for multiplying by 2
console.log(multiply(3)); // Outputs: 6

const divide = calculator('divide')(10); // Create a function for dividing 10
console.log(divide(2)); // Outputs: 5