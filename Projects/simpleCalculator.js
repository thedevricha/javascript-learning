/* Project: Simple Calculator
Development points:
- Create functions for each arithmetic operation
- Use conditional statements to determine which operation to perform
- Implement error handling for invalid inputs
- Add support for more complex operations (e.g., exponents, square roots) */

/* function validateInput(num1,num2){
    if((parseInt(num1, 10) === num1) && (parseInt(num2, 10) === num2)){
        return true;
    }else{
        console.log("Invalid inputs.")
        return false;
    }
}
// Function for addition
function addition(num1, num2){
    console.log("Addition => " + (num1 + num2));
}

// Function for subtraction
function subtraction(num1, num2){
    console.log("Subtraction => " + (num1 - num2));
}

// Function for multiplication
function multiplication(num1, num2){
    console.log("Multiplication => " + (num1 * num2));
}

// Function for division
function division(num1, num2){
    if(num2 === 0){
        console.log("Division by zero is not allowed.");
    }
    console.log("Division => " + (num1 / num2));
}

function modules(num1, num2){
    if(num2 === 0){
        console.log("Division by zero is not allowed.");
    }
    console.log("Modules => " + (num1 % num2));
}

// Function for exponentiation
function exponentiate(num1, num2) {
    console.log("Exponentiate => " + Math.pow(num1, num2));
}


// Function for square root
function squareRoot(num1) {
    if (num1 < 0) {
        console.log("Cannot calculate the square root of a negative number.");
    }
    console.log("Square Root => " + Math.sqrt(num1));

}
function runApp(){
    console.log("== Calculator Application ==");
    console.log("Options:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modules");
    console.log("6. Exponentiation");
    console.log("7. Square Root");
    console.log("8. Quit");
    let option = 0;
    do{
        option = parseInt(prompt("Select option."));
        const number1 = parseInt(prompt("Enter 1st number:"));
        const number2 = parseInt(prompt("Enter 2nd number:"));
        console.log("\nnumber1 = "+ number1 + " | number2 = "+ number2);
        
        switch (option) {
            case 1:
                var isValid = validateInput(number1, number2);
                isValid ? addition(number1, number2) : '';
                break;
            case 2:
                var isValid = validateInput(number1, number2);
                isValid ? subtraction(number1, number2) : '';
                break;
            case 3:
                var isValid = validateInput(number1, number2);
                isValid ? multiplication(number1, number2) : '';
                break;
            case 4:
                var isValid = validateInput(number1, number2);
                isValid ? division(number1, number2) : '';
                break;
            case 5:
                var isValid = validateInput(number1, number2);
                isValid ? modules(number1, number2) : '';
                break;
            case 6:
                var isValid = validateInput(number1, number2);
                isValid ? exponentiate(number1, number2) : '';
                break;
            case 7:
                var isValid = validateInput(number1, number2);
                isValid ? squareRoot(number1) : '';
                break;
            case 8:
                console.log("Goodbye!");
                return;
            default:
                console.log("Invalid option. Please try again.");
        }
    }while(option !== 8);
}

// Run the application
runApp(); */

function validateInput(num1, num2) {
    return !isNaN(num1) && !isNaN(num2);
}

// Function for addition
function addition(num1, num2) {
    console.log("Addition => " + (num1 + num2));
}

// Function for subtraction
function subtraction(num1, num2) {
    console.log("Subtraction => " + (num1 - num2));
}

// Function for multiplication
function multiplication(num1, num2) {
    console.log("Multiplication => " + (num1 * num2));
}

// Function for division
function division(num1, num2) {
    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        console.log("Division => " + (num1 / num2));
    }
}

// Function for modulus
function modules(num1, num2) {
    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        console.log("Modules => " + (num1 % num2));
    }
}

// Function for exponentiation
function exponentiate(num1, num2) {
    console.log("Exponentiate => " + Math.pow(num1, num2));
}

// Function for square root
function squareRoot(num1) {
    if (num1 < 0) {
        console.log("Cannot calculate the square root of a negative number.");
    } else {
        console.log("Square Root => " + Math.sqrt(num1));
    }
}

function runApp() {
    console.log("== Calculator Application ==");
    console.log("Options:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modules");
    console.log("6. Exponentiation");
    console.log("7. Square Root");
    console.log("8. Quit");

    let option = 0;

    do {
        option = parseInt(prompt("Select option."));
        let number1, number2;

        if (option === 7) { // Square root only requires one number
            number1 = parseFloat(prompt("Enter a number:"));
            if (!validateInput(number1, null)) {
                console.log("Invalid input. Please enter a valid number.");
                continue;
            }
            squareRoot(number1);
        } else if (option >= 1 && option <= 6) {
            number1 = parseFloat(prompt("Enter 1st number:"));
            number2 = parseFloat(prompt("Enter 2nd number:"));
            console.log("\nnumber1 = " + number1 + " | number2 = " + number2);

            if (!validateInput(number1, number2)) {
                console.log("Invalid inputs. Please enter valid numbers.");
                continue;
            }

            switch (option) {
                case 1:
                    addition(number1, number2);
                    break;
                case 2:
                    subtraction(number1, number2);
                    break;
                case 3:
                    multiplication(number1, number2);
                    break;
                case 4:
                    division(number1, number2);
                    break;
                case 5:
                    modules(number1, number2);
                    break;
                case 6:
                    exponentiate(number1, number2);
                    break;
            }
        } else if (option === 8) {
            console.log("Goodbye!");
            return;
        } else {
            console.log("Invalid option. Please try again.");
        }
    } while (option !== 8);
}

// Run the application
runApp();