import { Card } from './_typings/entity';

export default class CardGame {
  deck: Array<Card>;
  ui: any;
  flipCard: number = 0;
  firstCardId: number;
  secondCardId: number;

  constructor() {
    this.deck = null;
    this.ui = null;
  }

  startNewGame(deck: any, ui: any) {
    this.deck = deck.shuffleDeck();
    this.ui = ui;

    ui.createCards(this.deck);
    this.ui.startTimer();
  }

  updateGame(): void {
    if (this.flipCard === 2) {
      const res = this.deck.isMatched(this.firstCardId, this.secondCardId);
    }
  };
  
}
