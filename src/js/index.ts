import '../style/main.scss';
import { Card } from './_typings/entity';
import CardsDeck from './CardDeck';


class Game {
  cards: Array<Card>
  start: number;
  end: number;
  openCards: [HTMLElement, HTMLElement];
  selectedFirstCardIndex: number;
  selectedSecondCardIndex: number;

  constructor() {
    this.cards = CardsDeck.shuffleDeck();
    this.createCards();
    this.eventHandler();
  }

  createCards(): void {
    const wrapper: HTMLElement = document.createElement('div');
    wrapper.classList.add('cards');
    this.cards.forEach((card, cardIndex) => {
  
      const div: HTMLDivElement = document.createElement('div');
      const front: HTMLDivElement = document.createElement('div');
      const back: HTMLDivElement = document.createElement('div');
      const icon: HTMLElement = document.createElement('i');
  
      div.classList.add('card');
      div.setAttribute('id', `${cardIndex}`);
      front.classList.add('front');
      back.classList.add('back');
      icon.className = `fas ${card.symbol}`;
  
      div.append(front, back);
      front.append(icon);
      wrapper.append(div);
      wrapper.append(div);
    })
    document.body.append(wrapper);
  };

  eventHandler(): void {
    const startBtn: HTMLButtonElement = document.querySelector('.start-btn');
    const cards: Array<HTMLDivElement> = Array.from(document.querySelectorAll('.card'));

    if (startBtn) startBtn.addEventListener('click', this.startGame)
    cards.forEach((card) => {
      card.addEventListener('click', ({ target }: { target: EventTarget }) => this._openCard(target))
    })
  };

  startGame(): void {
    this.start = +new Date();
  };

  _openCard(target: EventTarget): void {
    const elem: Element = (<HTMLElement>target).classList.contains('card') ? <HTMLElement>target : (<HTMLElement>target).closest('.card');
    if (elem) {
      elem.classList.add('flip');
    }
  };



  


}

new Game();

