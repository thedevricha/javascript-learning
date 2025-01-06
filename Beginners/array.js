/* Create and Access  an Array */
let languages = ["JavaScript", "PHP", "Python"];
console.log(languages[0]); // Output: JavaScript
console.log(languages[1]); // Output: PHP
console.log(languages[2]); // Output: Python

/* Iterating Over an Array */
languages.forEach(function(language, index) {
  console.log(index +" => "+ language);
});
/* Output:
0 => JavaScript
1 => PHP
2 => Python
*/

/* `length` Property */
let length = languages.length; 
console.log(length); // Output: 3

/* `push()` method */
languages.push("Java");
console.log(languages); // Output: ['JavaScript', 'PHP', 'Python', 'Java']

/* `unshift()` method */
languages.unshift("C");
console.log(languages); // Output: ['C', 'JavaScript', 'PHP', 'Python', 'Java']

/* `pop()` method */
languages.pop();
console.log(languages); // Output: ['C', 'JavaScript', 'PHP', 'Python']

/* `shift()` method */
languages.shift();
console.log(languages); //  Output: ['JavaScript', 'PHP', 'Python']

/* `toString()` method */
let arrString = languages.toString();
console.log(arrString); //  Output: JavaScript,PHP,Python

/* `at()` method */
let value1 = languages.at(2);
console.log(value1); // Output: Python
let value2 = languages.at(-1);
console.log(value2); // Output: Python

/* `join()` method */
let arrJoin = languages.join(" | ");
console.log(arrJoin); // Output: JavaScript | PHP | Python

/* `find()` method */
let arrFind1 = languages.find(language => language === "PHP");
console.log(arrFind1); // Output: PHP
let arrFind2 = languages.find(language => language === "javascript");
console.log(arrFind2); // Output: undefined

let numberArr = [40,34,1,12,78,90];
console.log(numberArr.sort()); // Output: [1, 12, 34, 40, 78, 90]
let monthsArr = ['March', 'Jan', 'Feb', 'Dec'];
console.log(monthsArr.sort()); // Output: ['Dec', 'Feb', 'Jan', 'March']