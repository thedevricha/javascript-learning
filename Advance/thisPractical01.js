/* 'use strict';  */
/* 1. In the Global Context */
/* console.log(this); // Output: {} */

/* 2. Inside a Function */
function showThis() {
    console.log(this);
}
showThis();

/* Inside an Object Method */
const book = {
    title: 'JavaScript: The Dynamic Language',
    showTitle: function () {
      console.log(this.title);
    },
};
  
book.showTitle(); // Output: JavaScript: The Dynamic Language

/* With Arrow Functions */
const techBook = {
  title: 'JavaScript: A Dynamic Language',
  showTitle: function (){
    const arrowFunction = () => {
      console.log(this.title);
    }
    arrowFunction();
  }
}
techBook.showTitle(); // Output: JavaScript: A Dynamic Language 

/* In Constructor Functions */
function Book(title, author){
  this.title = title;
  this.author = author;
}
const myBook = new Book('Javascript', 'TheDevRicha');
console.log(myBook.title, myBook.author); // Output: Javascript TheDevRicha

/* In Classes */
class BookInfo{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
  showDetails(){
    console.log(`${this.title} by ${this.author}`);
  }
}

const bookInfo = new BookInfo('Javascript: Beginner Guide', 'TheDevRicha');
bookInfo.showDetails(); // Output: Javascript: Beginner Guide by TheDevRicha

/* Using call(), apply(), and bind() */
const member1 = {
  firstName: 'Iron',
  lastName: 'Man'
}

const member2 = {
  firstName: "Jake",
  lastName: "Sparrow",
}

function getMembershipDetail(plan, startYear){
  console.log(`${this.firstName} ${this.lastName} has a ${plan} plan starting in ${startYear}.`);
}

getMembershipDetail.call(member1, 'Gold', 2024); // Output: Iron Man has a Gold plan starting in 2024.
getMembershipDetail.call(member2, 'Silver', 2025) // Output: Jake Sparrow has a Silver plan starting in 2025.

getMembershipDetail.apply(member1, ['Platinum', 2023]); // Output: Iron Man has a Platinum plan starting in 2023.
getMembershipDetail.apply(member2, ['Bronze', 2022]); // Output: Jake Sparrow has a Bronze plan starting in 2022.

const memberShip1 = getMembershipDetail.bind(member1, 'Diamond', 2027);
const memberShip2 = getMembershipDetail.bind(member2, 'Basic', 2028);
memberShip1(); // Output: Iron Man has a Diamond plan starting in 2027.
memberShip2(); // Output: Jake Sparrow has a Basic plan starting in 2028.
