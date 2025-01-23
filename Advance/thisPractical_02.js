'use strict'; 
/* 1. In the Global Context */
/* console.log(this); // Output: {} */

/* 2. Inside a Function */
function regularFunction(){
    console.log(this); // global object
}
regularFunction();