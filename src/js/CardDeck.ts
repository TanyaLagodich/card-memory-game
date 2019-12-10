import { Card } from './_typings/entity';

const cards: Array<Card> = [
  {symbol: 'fa-cat'},
  {symbol: 'fa-cat'},
  {symbol: 'fa-crow'},
  {symbol: 'fa-crow'},
  {symbol: 'fa-dog'},
  {symbol: 'fa-dog'},
  {symbol: 'fa-dove'},
  {symbol: 'fa-dove'},
  {symbol: 'fa-dragon'},
  {symbol: 'fa-dragon'},
  {symbol: 'fa-fish'},
  {symbol: 'fa-fish'}
];

class CardDeck {
  cards: Array<Card>;

  constructor(cards: Array<Card>) {
    this.cards = cards;
  }

  isMatched() {
    
  };

  shuffleDeck() {
    let copyCardsDeck = this.cards;
    let currentIndex = copyCardsDeck.length;
    let temporaryValue,
        randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temporaryValue = copyCardsDeck[currentIndex];
      copyCardsDeck[currentIndex] = copyCardsDeck[randomIndex];
      copyCardsDeck[randomIndex] = temporaryValue;
    };

    return copyCardsDeck;
  }
}

export default new CardDeck(cards);