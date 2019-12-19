import { Card } from './_typings/entity';

export default class CardGame {
  deck: Array<Card>;
  ui: any;
  timerGame: number | null = 0;
  timerMinutes: number = 0;
  timerSeconds: number = 0;

  constructor() {
    this.deck = null;
    this.ui = null;
  }

  startNewGame(deck: any, ui: any) {
    this.deck = deck.shuffleDeck();
    this.ui = ui;

    ui.createCards(this.deck);
    this.startTimer();
  }

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
  
}
