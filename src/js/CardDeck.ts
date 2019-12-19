import { Card } from './_typings/entity';

export default class CardDeck {
  cards: Array<Card>;

  constructor(cards: Array<Card>) {
    this.cards = cards;
  }

  isMatched(firstCardId: any, secondCardId: any): boolean {
    if (!firstCardId || !secondCardId) return false;
    return this.cards[firstCardId].symbol === this.cards[secondCardId].symbol;
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