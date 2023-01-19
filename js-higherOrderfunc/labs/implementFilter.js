const even = function ( n ) { return n % 2 === 0 };

const odd = function ( n ) { return !even( n ) };

const above = function (min) {
    return function ( n ) {
      return n > min;
    }
  }

const repeatedValue = function(value, index, arr) {
    return index !== arr.indexOf(value);
}

function filter(array, func){

    const output = []
    for (let index = 0; index < array.length; index++) {
        if(func(array[index], index, array)){
            output.push(array[index])        
        }
    }

    return output;

}

let arr = [1,2,3,4,5,6];

console.log(filter(arr, even))// returns 2,4,6
console.log(filter(arr, odd)) // returns 1,3,5
console.log(filter(arr, above(3))) // returns 4,5,6
console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)) // returns 2,3

