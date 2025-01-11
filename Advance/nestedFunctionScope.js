/* Inner functions can access variables from outer functions */
function outerFunction(){
    const outerVar = "I am from Outer Function!";
    function innerFunction(){
        console.log(outerVar); // Accessible
    }
    innerFunction();
}
outerFunction(); // Output: I am from Outer Function! 

/* Outer functions cannot access variables from inner functions */
function outerFunction(){
    function innerFunction(){
        const innerVar = "I am from Inner Function";
    }
    console.log(innerVar); // Error: Uncaught ReferenceError: innerVar is not defined
    innerFunction();
}
outerFunction();

/* Nested functions have access to their outer scope even after the outer function has returned */
function outerFunction() {
    let count = 0;
  
    return function innerFunction() {
      count++;
      console.log("count = " + count); 
    };
}
  
const counter = outerFunction();
for(let i=1; i <= 5; i++){
    counter()
}
/* Output:
count = 1
count = 2
count = 3
count = 4
count = 5 */
  