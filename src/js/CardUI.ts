import '../style/main.scss';
import { Card } from './_typings/entity';
import CardDeck from './CardDeck';

export default class Game {
  timerGame: number | null = 0;
  timerMinutes: number = 0;
  timerSeconds: number = 0;
  
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

  startTimer(): void {
    this.stopTimerGame();
    this.timerGame = window.setInterval(() => this.updateTimerGame(), 1000)
  }

  stopTimerGame() {
    const timerElement: HTMLElement = document.querySelector('.js-timer-game');
    clearInterval(this.timerGame);
    timerElement.innerHTML = '00:00:00';
  }
  
  updateTimerGame(): any {
    const timerElement: HTMLElement = document.querySelector('.js-timer-game');
    if (this.timerSeconds >= 59) {
      this.timerMinutes++;
      this.timerSeconds = 0;
    } else {
      this.timerSeconds++;
    }

    timerElement.innerHTML = '00:' + this.timerMinutes + ':' + this.timerSeconds;
  }

  openCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.add('flip');
  };

  closeCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.remove('flip');
  };

  turnCard(cardId: string) {
    if (!cardId) return false;
    if (this.flipCard < 2) {
      this.openCard(cardId);
      this.flipCard++;
    }
    // this.updateGame();

  }

};
