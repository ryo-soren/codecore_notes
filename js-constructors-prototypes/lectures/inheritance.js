//Regular Dog Constructor function:
function Dog(name){
    this.name = name;
}

//Outside constructor function, we are assigning the prototype
//methods to all instances of the Dog constructor
Dog.prototype.bark = function(){
    console.log(`${this.name}: woof!`)
}

Dog.prototype.fetch = function(){
    console.log(`${this.name} is fetching...`)
}

const rufus = new Dog("Rufus");
const winston = new Dog("Winston");

//Brand new constructor DoggoFighters

function DoggoFighter(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility
}

DoggoFighter.prototype.useSpecial = function () {
    console.log(`${this.name} uses the special ability: ${this.specialAbility}`);
}

// instance of DoggoFighter:
const doge = new DoggoFighter("Doge", "ninja attack")
doge.useSpecial()
// doge.bark() // this does not work as doge is not an instance of Dog constructor

// What we want to do is something like this:
// DoggoFighter.prototype.__proto__ = Dog.prototype

// to set DoggoFighter as a child and dog as a parent constructor 
Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype)
// first arg is what you want to set, second what you want to set it to
// child, parent 

console.log(doge.__proto__ === DoggoFighter.prototype);
console.log(doge.__proto__ === Dog.prototype);

doge.bark()