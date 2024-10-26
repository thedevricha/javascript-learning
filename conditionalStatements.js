const num = 0
console.log("// else if conditional statement")
if(num > 0){
    console.log('Number is positive')
}else{
    console.log('Number is negative')
}

console.log("// else if conditional statement")
if(num > 0){
    console.log('Number is positive')
}else if (num < 0){
    console.log('Number is negative')
}else {
    console.log('Number is zero')
}

console.log("// switch conditional statement")
const color = 'red'
switch(color){
    case 'red': 
        console.log("Color is red")
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