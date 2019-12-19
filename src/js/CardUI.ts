import '../style/main.scss';
import { Card } from './_typings/entity';
import CardDeck from './CardDeck';

export default class Game {
  firstCardId: number | null;
  secondCardId: number | null;
  flipCard: number = 0;

  createCards(cards: Array<Card>): void {
    const wrapper: HTMLElement = document.querySelector('.cards');
    wrapper.innerHTML = cards.map((card, cardIndex) => {
      return `<div class="card"
                   id="${cardIndex}">
                <div class="fornt">
                  <i class="fas ${card.symbol}"></i>
                </div>
                <div class="back"></div>
              </div>`
    }).join('');
  };

  // updateGame(): void {
  //   if (this.flipCard === 2) {
  //     const res = CardDeck.isMatched(this.firstCardId, this.secondCardId);
  //   }
  // };

  _openCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.add('flip');
  };

  _closeCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.remove('flip');
  };

  _turnCard(cardId: string) {
    if (!cardId) return false;
    if (this.flipCard < 2) {
      this._openCard(cardId);
      this.flipCard++;
    }
    // this.updateGame();

  }

};
