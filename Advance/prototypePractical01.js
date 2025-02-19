function Person(fname, lname){
    this.firstName = fname
    this.lastName = lname
}

/* const person1 = new Person("Iron","Man")
const person2 = new Person("Jack","Sparrow") */

// using prototype now getFullName available for all instance of Person
Person.prototype.getFullName = function (){
    return this.firstName+ " " + this.lastName
}

/* console.log(person1.getFullName())
console.log(person2.getFullName()) */

/* Inheritance */
function SuperHero(fname, lname){
    // this = {}
    Person.call(this, fname, lname)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function (){
    console.log("Fight Crime")
}
SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero("Iron", "Man");
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())