let num = 0
console.log("// if conditional statement")
if(num === 0){
    console.log('Number is zero') // Output: Number is zero
}

console.log("// if-else conditional statement")
num = -10;
if(num > 0){
    console.log('Number is positive')
}else{
    console.log('Number is negative') // Output: Number is negative
}

console.log("// else if conditional statement")
num = 0;
if(num > 0){
    console.log('Number is positive') 
}else if (num <= 0){
    console.log('Number is negative') // Output: Number is negative
}else {
    console.log('Number is zero')
}

console.log("// switch conditional statement")
const color = 'red'
switch(color){
    case 'red': 
        console.log("Color is red") // Output: Color is red
        break
    case 'blue': 
        console.log("Color is blue")
        break
    case 'green': 
        console.log("Color is green")
        break
    default:
        console.log("Not a valid color")
}

num = 20
console.log("// Ternary Operator")
let result = num >= 0 ? "Number is positive" : "Number is negative";
console.log(result) // Output: Number is positive

console.log("// Nested if-else Statement")
let operation = "+";

if (num >= 0) {
  if (operation === "+") {
    console.log("Sum of number is " + (num + 100)); // Output: Sum of number is 120
  } else {
    console.log("Invalid choice");
  }
} else {
  console.log("Negative values not allowed");
}