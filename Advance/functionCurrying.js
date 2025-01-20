// Regular Function
function makeBurger(bun, patty, topping) {
    return `Your burger has: ${bun} bun, ${patty} patty, and ${topping} topping.`;
}

const myBurger = makeBurger("Sesame", "Mix Veg", "Cheese");
console.log(myBurger); // Output: Your burger has: Sesame bun, Mix Veg patty, and Cheese topping.

// Curried Function
function makeBurgerCurried(bun) {
    return function (patty) {
        return function (topping) {
            return `Your burger has: ${bun} bun, ${patty} patty, and ${topping} topping.`;
        };
    };
}

// Example usage
const chooseBun = makeBurgerCurried("Sesame");
console.log(chooseBun);
/* Output:
ƒ (patty) {
    return function (topping) {
        return `Your burger has: ${bun} bun, ${patty} patty, and ${topping} topping.`;
    };
} */
const choosePatty = chooseBun("Mix Veg");
console.log(choosePatty);
/* ƒ (topping) {
    return `Your burger has: ${bun} bun, ${patty} patty, and ${topping} topping.`;
} */
const myCurriedBurger = choosePatty("Cheese");

console.log(myCurriedBurger); // Output: Your burger has: Sesame bun, Mix Veg patty, and Cheese topping.

// Simplified Arrow Function for Currying
const  curriedArrowFunction = (bun) => (patty) => (topping) =>
    `Your burger has: ${bun} bun, ${patty} patty, and ${topping} topping`

const myArrowFunction = curriedArrowFunction("Sesame")("Mix Veg")("Cheese")
console.log(myArrowFunction); // Your burger has: Sesame bun, Mix Veg patty, and Cheese topping

/* Real-World Application: Discount Calculator */
/* Example: Using a Regular Function */
function calculateDiscount(customerType, price) {
    if (customerType === "Regular") {
        return price * 0.9; // 10% discount
    } else if (customerType === "Premium") {
        return price * 0.8; // 20% discount
    }
}

console.log(calculateDiscount("Regular", 100)); // 90
console.log(calculateDiscount("Premium", 100)); // 80

/* Example: Using a Curried Function */
function createDiscountCalculator(discountRate) {
    return function (price) {
        return price * (1 - discountRate);
    };
}

// Create specific calculators for different customer types
const regularDiscount = createDiscountCalculator(0.1); // 10% discount
const premiumDiscount = createDiscountCalculator(0.2); // 20% discount

// Use them for calculations
console.log(regularDiscount(100)); // 90
console.log(premiumDiscount(100)); // 80
console.log(regularDiscount(200)); // 180
