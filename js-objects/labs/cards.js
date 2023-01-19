// Deck of Cards

const suits = ['diamonds', 'spades', 'clubs', 'hearts'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

const deck = {
  cards: function (suits, values) {
    const result = [];

    for (const suit of suits) {
      // console.log(suit);
      for (const val of values) {
        result.push({ suit: suit, number: val });
        // console.log(`suit: ${suit}`, `number: ${val}`);

        // result.push({`suit: ${suit}, number: ${val}`});
        // console.log({'suit', suit, 'number', val})
      }
    }
    // console.log(result);
    return result;
  },

  draw(cards) {
    const rand = Math.floor(Math.random() * 52) + 1;
    return cards[rand];
  },

  reset(cards) {
    return this.deck()
  }
}

const cards = deck.cards(suits, values)
console.log(deck.cards(suits, values).length);
console.log(deck.draw(cards));







