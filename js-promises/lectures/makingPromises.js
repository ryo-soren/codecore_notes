// WHat is a constructor
// a constructor is meant to create objects
// We have a promise constructor/class that makes new promise objects

// Create new promise with asynchronous function

const waitOneSecond = new Promise((resolve, reject) => {

        console.log("Wait one second...");
        // we want to resolve something after setTimeout is completed
        resolve("I will build the house in 3 weeks")
        reject("The house was not built in 3 weeks")
    
})
setTimeout(() => {
    waitOneSecond.then((data) => {
        console.log(data);
    }).catch((data) => {
        console.log(data);
    })
}, 1000);

// We must have resolve mor reject for promises to work
// When rejecting, there will be a .catch
// Promise will be completed if either resolved or rejected - only once

// 3 different states an instnce of a promise can be in...
// 1) pending: the async action is still working in the background
// 2) fullfilled: the promised has finished to a good value - resolved
// 3) rejected: the promised has finished to a bad value - rejected