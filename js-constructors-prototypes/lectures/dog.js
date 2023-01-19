// constructor function:
function Dog(name){
    this.name = name;
}

// outside constructor function, we are assigning the prototype 
// methods to all instances of the Dog cnstructor 
Dog.prototype.bark = function(){
    console.log(`${this.name}: woof`)
}

Dog.prototype.fetch = function () {
    console.log(`${this.name} is fetching...`);
}

const rufus = new Dog("Rufus");
const winston = new Dog("Winston");

rufus.bark()
winston.bark()
rufus.fetch()

winston.bark = function(){ // overwrites the old function
    console.log(`${this.name}: bork!`);
}

winston.bark()

// cannot do this
// let obj = {}
// obj.protoype.fetch = console.log("fetching");

// below is true 
// winston.__proto__ === Dog.prototype

console.log(Object.getPrototypeOf(new Dog("Fluffy")));


