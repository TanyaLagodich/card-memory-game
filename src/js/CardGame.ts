import { Card } from './_typings/entity';

export default class CardGame {
  deck: any;
  ui: any;
  flipCard: number = 0;
  firstCardId: number;
  secondCardId: number;

  constructor() {
    this.deck = null;
    this.ui = null;
  }

  startNewGame(deck: any, ui: any) {
    this.deck = deck;
    this.ui = ui;

    ui.createCards(this.deck.shuffleDeck());
  }

  turnCard(cardId: string) {
    console.log(this.flipCard)
    if (!cardId) return false;
    if (this.flipCard > 1) return false;
    this.ui.openCard(cardId);
    this.flipCard += 1;
    if (this.flipCard === 1) {
      this.firstCardId = +cardId;
    } else {
      if (this.deck.isMatched(this.firstCardId, cardId)) {
        this.ui.animateMacthedCards(this.firstCardId, cardId);
      } else {
        this.ui.closeCard(this.firstCardId);
        this.ui.closeCard(cardId);
      }
      this.flipCard = 0;
      this.firstCardId = null;
    }

  }
  
}
