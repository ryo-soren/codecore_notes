// Basic arrow function

const bark = (name, sound = "Woof!") => {
    return `${name} barks ${sound}`
  }
const bark1 = (name, sound = "Woof!") => `${name} barks ${sound}`
  
const bark2 = name => `${name} barks Woof!`


// converting to arrow function

// function add(a, b){
//     return a + b;
// }
// const add = (a, b) => a + b;

const sub5 = (a) => a-5
 
// function flip(fn) {
//     return function (a,b){
//         return fn(b,a)
//     }
// }

// const flip = fn => (a,b) => fn(b, a)

// function V(x) {
//     return function(y){
//         return function(z){
//             return z(x)(y)
//         }
//     }
// }

// const V = x => y => z => z(x)(y)

const arr = [5,10,15,20]

const plus1 = console.log(arr.map((i = sub5(x)) => i+1))

plus1


