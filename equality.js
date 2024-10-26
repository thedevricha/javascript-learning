console.log("== Case 1 ==")
const var1 = '10'
const var2 = '10'
console.log(var1 == var2)
console.log(var1 === var2)

console.log("== Case 2 ==")
const var3 = '10'
const var4 = 10
console.log(var3 == var4) // JavaScript automatically coercion variable var4 to var3 string type
console.log(var3 === var4) // Must ensure both value have same datatype

console.log("== Case 3 ==")
const var5 = ''
const var6 = 10
console.log(var5 == var6)
console.log(var5 === var6)

console.log("== Case 4 ==")
const var7 = ''
const var8 = 10
console.log(var7 == var8)
console.log(var7 === var8)

console.log("== Case 5 ==")
const var9 = 0
const var10 = ''
console.log(var9 == var10)
console.log(var9 === var10)

console.log("== Case 6 ==")
const var11 = false
const var12 = ''
console.log(var11 == var12)
console.log(var11 === var12)

console.log("== Case 7 ==")
const var13 = null
const var14 = undefined
console.log(var13 == var14)
console.log(var13 === var14)