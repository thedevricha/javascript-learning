function greet(username){
    console.log("Hello! Good morning " + username)
}
greet('Richa')
greet('Mike')
greet('Aly')

function add(var1, var2){
    return var1 + var2
}
const result1 = add(10, 5)
console.log(result1)

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
