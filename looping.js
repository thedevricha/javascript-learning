console.log("== For loop ==")
for(let var1 = 1; var1 <= 5; var1++){
    console.log('Iteration number '+ var1)
}

console.log("== While loop ==")
let var2 = 1
while(var2 <= 5){
    console.log('Iteration number '+ var2)
    var2++
}

console.log("== Do while loop :: Example 1 ==")
let var3 = 1
do {
    console.log('Iteration number '+ var3)
    var3++
}while(var3 <= 5)

console.log("== Do while loop :: Example 2 ==")
let var4 = 6
do {
    console.log('Iteration number '+ var4)
    var4++
}while(var4 <= 5)

console.log("== For..of loop ==")
const numArray = [1,2,3,4,5]

for(const num of numArray){
    console.log('Iteration number '+ num)
}
