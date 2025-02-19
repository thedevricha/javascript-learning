/* Objects in JavaScript */
let superHero = {
    name: "Iron Man",
    superPower: function(){
        console.log("Superhuman strength and durability")
    }
}

console.log(superHero.name) // Output: Iron Man
superHero.superPower() // Output: Superhuman strength and durability

/* Constructor Functions */
function SuperHero(name) {
    this.name = name
    /* this.intro = function (){
        console.log("I am "+this.name)
    } */
}

let superHero1 = new SuperHero('Captain America')
let superHero2 = new SuperHero('Doctor Strange')
/* superHero1.intro() // Output: I am Captain America
superHero2.intro() // Output: I am Doctor Strange */
console.log(superHero1.intro === superHero2.intro); // false (Each object has its own copy)

SuperHero.prototype.intro = function () {
    console.log("I am " + this.name);
};

console.log(superHero1.intro === superHero2.intro); // true