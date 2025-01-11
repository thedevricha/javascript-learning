// Without Closure
/* function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log("counter = " + counter)
    }
    inner()
}
outer()
outer() 

/* Output:
counter = 1
counter = 1*/

// With Closure
function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log("counter = " + counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
/* Output:
counter = 1
counter = 2*/

/* Example with Multiple Instances */
function counterFunction() {
    let count = 0;

    return function increment() {
        count++;
        return count;
    };
}

const counter1 = counterFunction();
const counter2 = counterFunction();

console.log("counter1 = " + counter1()); // Output: 1
console.log("counter1 = " + counter1()); // Output: 2
console.log("counter2 = " + counter2()); // Output: 1
console.log("counter1 = " + counter1()); // Output: 3
console.log("counter2 = " + counter2()); // Output: 2

/* Practical Uses of Closures */
// Data Privacy
function secretInfo() {
    let secret = "I love JavaScript";
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}

const secretObject = secretInfo();
console.log(secretObject.getSecret()); // Output: I love JavaScript
secretObject.setSecret("I love Python too!");
console.log(secretObject.getSecret()); // Output: I love Python too!
secretObject.setSecret("I love PHP too!");
console.log(secretObject.getSecret()); // Output: I love PHP too!
// Attempting to Access secret Directly will not work
console.log(secretObject.secret); // Output: undefined

// Function Factories
function calculate(factor) {
    return function multiplier(number) {
        return number * factor;
    };
}

const double = calculate(2);
const triple = calculate(3);
console.log(double);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Event Listeners and Closures
function setupListener(buttonId) {
    let clickCount = 0;

    document.getElementById(buttonId).addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupListener("myButton");

