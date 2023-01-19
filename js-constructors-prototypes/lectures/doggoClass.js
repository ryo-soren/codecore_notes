// classes are created with keyword "class"

class Doggo{
    // constructor is a special method for classes
    // is fired off when we create a new instance of the class of Doggo
    // is similar to the constuctor function
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // class methods are methods created in the constructor
    // but these methods are prototype methods by default
    bark(){
        console.log(`${this.name}: woof!`);
    }
}

const lucky = new Doggo("Lucky", 2)

lucky.bark()

class DoggoFighter extends Doggo{
    constructor(name, age, specialAbility){
        super(name, age) 
        this.specialAbility = specialAbility;
    }
    useSpecial(){
        console.log(`${this.name} uses the special ability: ${this.specialAbility}`);
    }
}

const buster = new DoggoFighter("Buster", 5, "Hide mode")
buster.useSpecial()
buster.bark() // access to Doggo class as it was created as a DoggoFighter
// lucky.useSpecial() // invalid as lucky is only a Doggo 
