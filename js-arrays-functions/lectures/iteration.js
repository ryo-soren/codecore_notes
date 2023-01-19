const array = ['a', 'b', 'c']

// regular for loop 
// this is when you need the index

for (let i = 0; i < array.length; i++) {
    console.log(`index = ${i} value = ${array[i]}`);
}

// for...of loop
// this way will loop through the whole array and automatically stop when it reaches the end
for (const value of array) {
    console.log(`value = ${value}`);
}


const sum = (arrayOfNums) =>{
    total = 0
        for (const number of arrayOfNums) {

            if (typeof number === 'number') {
                
                total += number

            }
        }

    return total;
}

let arr = [1,2,3,4,5,6]
let arr2 = [2, 2, "A", 2]
console.log(sum(arr)); // 21
console.log(sum(arr2)); // 6