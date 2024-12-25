/* // Global scope
const occupation = 'Super Hero' 
const name = 'Avangers'

console.log("// Block scope")
if(true){
    const name = 'SpiderMan'
    console.log(name)
    console.log(occupation)
}

console.log("// Function scope")
function printFunction(){
    const name = 'Ironman'
    console.log(name)
    console.log(occupation)
}
printFunction() */

let globalVar = 'Global scope!';

function functionScope(){
    let functionVar = 'Function scope!';
    if(true){
        let blockVar = 'Block scope!';
        console.log(blockVar); // Output: Block scope!
    }
    console.log(globalVar);     // Output: Global scope!
    console.log(functionVar);   // Output: Function scope!
    console.log(blockVar);      // Error: blockVar is not defined
}

functionScope();
console.log(globalVar);
console.log(functionVar);   // Error: functionVar is not defined
console.log(blockVar);      // Error: blockVar is not defined

