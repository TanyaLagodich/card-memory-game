import '../style/main.scss';
import { Card } from './_typings/entity';
import CardsDeck from './CardDeck';

class Game {
  cards: Array<Card>
  start: number;
  end: number;
  firstCardId: number | null
  secondCardId: number | null
  flipCard: number = 0

  constructor() {
    this.cards = CardsDeck.shuffleDeck();
    this.createCards();
    this.eventHandler();
  }

  createCards(): void {
    const wrapper: HTMLElement = document.createElement('div');
    wrapper.className = 'container cards';
    wrapper.innerHTML = this.cards.map((card, cardIndex) => {
      return `<div class="card"
                   id="${cardIndex}">
                <div class="fornt">
                  <i class="fas ${card.symbol}"></i>
                </div>
                <div class="back"></div>
              </div>`
    }).join('');
    document.body.append(wrapper);
  };

  eventHandler(): void {
    const startBtn: HTMLButtonElement = document.querySelector('.start-btn');
    const cards: Array<HTMLDivElement> = Array.from(document.querySelectorAll('.card'));

    if (startBtn) startBtn.addEventListener('click', this.startGame)
    cards.forEach((card) => {
      card.addEventListener('click', ({ target }: { target: EventTarget }) => {
        const element: Element = (<HTMLElement>target).classList.contains('.card') ? <HTMLElement>target : (<HTMLElement>target).closest('.card');
        this._turnCard(element.getAttribute('id'));
      })
    })
  };

  startGame(): void {
    this.start = +new Date();
  };

  updateGame(): void {
    if (this.flipCard === 2) {
      const res = this.isMatchedCards()
      console.log(res)
    }
  };

  isMatchedCards(): boolean {
    console.log(this.firstCardId, !this.secondCardId)
    if (!this.firstCardId || !this.secondCardId) return false;
    console.log(this.cards[this.firstCardId].symbol, this.cards[this.secondCardId].symbol)
    return this.cards[this.firstCardId].symbol === this.cards[+this.secondCardId].symbol;
  }

  _openCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.add('flip');
  };

  _closeCard(cardId: string): void {
    const cardElement: HTMLElement = document.getElementById(cardId);
    cardElement.classList.remove('flip');
  };

  _turnCard(cardId: string) {
    console.log(this.flipCard)
    if (!cardId) return false;
    if (this.flipCard < 2) {
      this._openCard(cardId);
      this.flipCard++;
    }
    this.updateGame();

  }

};

export default Game;

