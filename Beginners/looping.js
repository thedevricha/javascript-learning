console.log("== For loop ==")
for(let var1 = 1; var1 <= 5; var1++){
    console.log('Iteration number '+ var1)
}
/* Output:
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
Iteration number 5 */

console.log("== While loop ==")
let var2 = 1
while(var2 <= 5){
    console.log('Iteration number '+ var2)
    var2++
}
/* Output:
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
Iteration number 5 */

console.log("== Do while loop :: Example 1 ==")
let var3 = 1
do {
    console.log('Iteration number '+ var3)
    var3++
}while(var3 <= 5)
/* Output:
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
Iteration number 5 */

console.log("== Do while loop :: Example 2 ==")
let var4 = 6
do {
    console.log('Iteration number '+ var4)
    var4++
}while(var4 <= 5)
/* Output:
Iteration number 6 */

console.log("== For..of loop ==")
const numArray = [1,2,3,4,5]

for(const num of numArray){
    console.log('Iteration number '+ num)
}
/* Output:
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
Iteration number 5 */
console.log("== For...in loop ==")
const user = { name: "Richa", age: 25, role: "Developer" };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
/* Output:
name: Richa
age: 25
role: Developer */
console.log("== break ==")
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log("Iteration number "+i);
}
/* Output:
Iteration number 1
Iteration number 2 */

console.log("== continue ==")
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Iteration number "+i);
}
/* Output:
Iteration number 1
Iteration number 2
Iteration number 4
Iteration number 5 */