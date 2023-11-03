/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = [];
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  for (let i = 0; i < suits.length; i++) {
    // create an array of 13 objects
    for (let j = 1; j <= 13; j++) {
      // for each loop, push a card object to the deck

      // special cases for when j > 10
      let displayVal = '';

      switch (j) {
        case j === 1:
          displayVal = 'Ace';
          break;
        case j > 1 && j <= 10:
          displayVal = j;
          break;
        case j === 11:
          displayVal = 'Jack';
          break;
        case j === 12:
          displayVal = 'Queen';
          break;
        case j === 13:
          displayVal = 'King';
          break;
      }

      const card = {
        val: j,
        displayVal: displayVal,
        suit: suits[i]
      };

      if (j === 1) {
        card.val = 11;
      } else if(j >= 11 && j <= 13) {
        card.val = 10;
      }

      deck.push(card);
    }
  }

  return deck;
}

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);
