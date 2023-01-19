// build a constructor that creates an object like this 

/*
    count:0; // integer
    step: 1; // integer
    inc: // method that increases count by step
    dec: // method that decreases count by step
    now: // method that returns the counter object at the current state 
*/

function Counter(count, step=1) { // set a default value if step is not passed as an argument

    this.count = count || 0; // defaults to 0 if no value is passed 
    this.step = step

    this.inc = function(){
        this.count += this.step
        return this;
    }

    this.dec = function () {
        this.count -= this.step
        return this;
    }

    this.now = function () {
        return this.count;
    }
}

const c1 = new Counter(10,5); // will start a count of 10 and increase or decrease by step of 5
const c2 = new Counter(); // new instance with default values for count/step
const c3 = new Counter(); // redundant as the functions within are the same as c2

c1.inc()
c1.inc()
c1.inc()
c1.inc()
c2.inc()
c2.inc()
c2.inc()
c2.inc()

console.log(c1.now());
console.log(c2.now());
