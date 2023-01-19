class Card {
    constructor(number, suit){
        this.number = number
        this.suit = suit
    }

    toString() {

        let value = ""

        switch (this.number) {
            case 1:
                value = "Ace"
                break;
        
            case 11:
                value = "Jack"
                break;
        
            case 12:
                value = "Queen"
                break;
        
            case 13:
                value = "King"
                break;
        
            default:
                value = this.number
                break;
        }
        const suitStr = this.suit[0].toUpperCase() + this.suit.slice(1)
        return `Card {${value} of ${suitStr}}`

    }
}

class Deck{
    constructor(){
        this.reset()
    }

    draw(){
        return this.cards.pop()
    }
    shuffle(){
        for (let i = 0; i < this.cards.length; i++) {
            let randInd = parseInt(Math.floor(Math.random() * (this.cards.length-1)))
            let othrCard = this.cards[randInd]
            this.cards[randInd] = this.cards[i]
            this.cards[i] = othrCard
        }
    }
    reset(){
        let numbers = []
        for (let i = 1; i <= 13; i++){ 
            numbers.push(i)  
        }

        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
        let cards = []

        for (const number of numbers) {
            for (const suit of suits) {
                cards.push(new Card(number, suit))
            }
        }
        this.cards = cards
    }
}


const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');

console.log(aceOfSpades.toString()) // returns 'Card { Ace of Spades }'
console.log(tenOfHearts.toString()) // returns 'Card { 10 of Hearts }'
console.log(kingOfDiamonds.toString()) // returns 'Card { King of Diamonds }'

const test = new Deck()

console.log(test.draw());

test.shuffle()
console.log(test);
console.log(test.draw());
console.log(test.draw());
console.log(test.draw());
console.log(test.draw());

test.reset()
console.log(test);
console.log(test.draw());
