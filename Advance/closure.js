// Without Closure
/* function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    inner()
}
console.log("== Without Closure ==")
outer()
outer() */

// With Closure
function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
console.log("== With Closure ==")
const fn = outer()
fn()
fn()
fn()