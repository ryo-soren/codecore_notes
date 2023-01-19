function Counter(val, initialVal) {
    this.val = val || 1
    this.initialVal= initialVal || 0
}

Counter.prototype.inc = function () {
    this.initialVal += this.val
    return this;
}

Counter.prototype.dec = function () {
    this.initialVal -= this.val
    return this;
}

Counter.prototype.now = function () {
    return this.count
}

console.log(Counter.__proto__);

const c1 = new Counter(); 
const c2 = new Counter(); 
const c3 = new Counter(); 

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c3.now());