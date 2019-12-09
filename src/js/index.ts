import './style/main.scss';

const cards: Array<string> = ['fa-cat', 'fa-crow', 'fa-dog', 'fa-dove', 'fa-dragon', 'fa-fish', 'fa-cat', 'fa-crow', 'fa-dog', 'fa-dove', 'fa-dragon', 'fa-fish'];

class Game {
  cards: Array<string>;
  start: number;

  constructor(cards: Array<string>) {
    this.cards = cards;
    this.createCards();
    this.eventHandler();
  }

  createCards(): void {
    const wrapper: HTMLElement = document.createElement('div');
    wrapper.classList.add('cards');
    this.cards.forEach(card => {
  
      const div: HTMLDivElement = document.createElement('div');
      const front: HTMLDivElement = document.createElement('div');
      const back: HTMLDivElement = document.createElement('div');
      const icon: HTMLElement = document.createElement('i');
  
      div.classList.add('card');
      front.classList.add('front');
      back.classList.add('back');
      icon.className = `fas ${card}`;
  
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
      card.addEventListener('click', ({ target }: { target: EventTarget }) => this._togleClass(target))
    })
  };

  startGame(): void {
    this.start = +new Date();
  };

  _togleClass(target: EventTarget): void {
    const elem: Element = (<HTMLElement>target).classList.contains('card') ? <HTMLElement>target : (<HTMLElement>target).closest('.card');
    if (elem) {
      elem.classList.toggle('flip');
    }
  };



  


}

new Game(cards);

