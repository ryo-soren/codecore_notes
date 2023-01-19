const even = n => n % 2 === 0;
const pow2 = n => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6];

// // function map(array, action){

// //     let arrayOfVal = []
    
// //     if (array.length < 1) {
// //         return arrayOfVal
// //     }
    

// //     const x = action(array[0])
// //     array.map(val => arrayOfVal.push(x))
// //     map(array.slice(1), action)
// //     return arrayOfVal
// //     }

// // const names = ["Cersei", "Jon", "Arya"];


// // console.log(map(numbers, n => n.toString().repeat( n ))) // ['1', '22', '333', '4444', '55555', '666666'] 
// // console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]
// // console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']

// function map(arr, func){
//     let output = []

//     for (const element of arr) {
//             const x = map(arr.slice(1), func)
//             x.forEach(val => {
//                 output.push(func(val))})  
//         return output;
//     }
// }


const map = ([first, ...rest],cb) => {
    return [
      ...([cb(first)]),
      ...(rest.length === 0 ? [] : map(rest,cb)),
    ]
  }

console.log(map(numbers, even)); // [false, true, false, true, false, true]