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
printFunction()