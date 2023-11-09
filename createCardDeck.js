/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = [];
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      let displayVal = '';

      if(j === 1) { displayVal = 'Ace'; }
      else if(j === 11) { displayVal = 'Jack'; }
      else if(j === 12) { displayVal = 'Queen'; }
      else if(j === 13) { displayVal = 'King'; }
      else { displayVal = j; }

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
