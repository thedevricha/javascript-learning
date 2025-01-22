/* function sayMyName(name){
    console.log(`My name is ${name}`)
}
sayMyName('Richa') */

/* Implicit binding */
const person = {
    name: 'Richa',
    sayMyName : function () {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName()

/* Explicit binding */
/* Separate function from object */
globalThis.name = 'superMan';
function sayMyName(){
    console.log(`My name is ${this.name}`)
}
/* Use call method which is built in method of all function in JS */
sayMyName.call(person)

/* New binding */
function Person(name){
    // this = {} // new keyword will create empty object internally
    this.name = name;
}

const p1 = new Person('Richa') // constructor function
const p2 = new Person('Parekh')
console.log(p1.name, p2.name)

/* Default binding or fallback binding if none of the above three rules are match. 
this keyword will relive in global scope*/
sayMyName();