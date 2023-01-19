// Declare an array like this, with []

let fruitArray = ["apple", "banana", "pineapple"]
// apple = fruitArray[0]
// banana = fruitArray[1]
// pineapple = fruitArray[2]

let array = []
let obj = {}
let string = ''

// 'apple', 'banana', 'pineapple' are the data values in the ordered list called the array
// they are also referred to as the array's elements (or nodes)
// each value has a numbered position, the index

// Arrays can contain any type of values
[1,2,3,4,5,6,7] // array of numbers
['a', 'b', 'c', 'd'] // array of strings
[add(1,2), add(2,3)] // array with a mix of return values from the called functions
[['a', 1], ['b', 2], ['c', 3]] // array of arrays
[1, [2, [3, [4, [5, null]]]]] // nested arrays
    
// new Array(10)
// above is another way of declaring an array, but it is not recommended

// Array operations and Methods

// .length to get the length of the array
let arr = [1,2,3,4,5]
arr.length // return5, but the index goes until 4
// [].length - returns 0

// grabbing specific element value within an array using it's index
arr[0] // returns at index 0 which is 1
arr[-1] // returns undefined 
arr[arr.length - 1] // will return the last element in the index (in this case 5)

// .concat adds whatever you supply as an argument to the methodto the given array
arr.concat([6,7,8]) // returns [1,2,3,4,5,6,7,8]

// .slice extracts parts of an array from a given index
arr.slice(0, 2) // returns [1,2] - includes first argument index, excludes second arg index
// The first argument index of where to start keeping values
// The second argument is the index of where to stop keeping values
// If the second argument is not given, its to the end of the array (the last index)
arr.slice(-2) // returns [7,8] - last 2 indices of the array

// .join will join all elements of an array into a string
// the argument passed is a string that will be between each value/element in the string after it is joined
arr.join('') // '12345'
arr.join(" | ") // "1 | 2 | 3 | 4 | 5"


const arr2 = ['a', 'b', 'c', 'd']

// Mutable methods

arr2.push('g') // will add the argument to the end of the array and return the new length(4) and mutate the original array to ['a','b','c','g']
arr2.pop() // takes off last element and returns 'd' and mutates the original array to ['a', 'b', 'c']
arr.unshift('f') // adds the argument to the beginning of the array and returns 4 for the new length of the array and mutates the original array to ["f", "a", "b", "c"]
arr2.shift() // removes first element and returns 'f' and mutates original array to ["a", "b", "c"]

Array.isArray(value) // returns boolean
Array.isArray(arr2) // returns true

// to check if a specific value is in a given array
arr2.includes('a') // returns true because the value passed exists in the array