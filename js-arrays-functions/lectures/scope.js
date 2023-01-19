// original variable declaration
var newVariable = 'hello world' //value can be changed

// new way after ES6
let letVariable = 'hello again' // value can be changed
const constantVariable = 'My value cannot change'

// const and let are block scoped:
if (true) {
  let i = 'hi'
}
// console.log(i); // ReferenceError: i is not defined // because i is not within the if statement block

// i is declared within if's block therefor only exists inside of it 
// i is only available within the cope of the if block 
// i is not accessible outside, therefor you will have a reference error
// it is block scoped 

// scoped for all blocks, especially function blocks 

// function hi(){
//     let j = 10
// }

// console.log(j); // j is only defined within the function block 


// Variables are always accessible inside child blocks, so declaring a variable outside in the parent block, will make it available in the child block

// All variables can be shadowed
// meaning it can be declared twice, in the parent block as well as the child block,
// and have different values, depending on where it is referenced, like below:

let i = 'bye'

if (true) {
    // if block begins
    let i = 'hello'
    // if block ends
}

console.log(i);

// i has the value of 'bye', but only has the value of 'hello' within the if block

// VAR
// var is only JavaScript way of declaring variables
// it is said the be function scoped
// it's not block scoped, so the variable is still accessible
// to the parent block if declared in the child block
// the only way to restrict this behavior is to restrict it with an
// Immediately Invoked Function Expression(IIFE), like this:

(function(){
    var i = 'hello'
})()

console.log(i);