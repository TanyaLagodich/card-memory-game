import './style/main.scss';

const cards: Array<string> = ['fa-cat', 'fa-crow', 'fa-dog', 'fa-dove', 'fa-dragon', 'fa-fish'];

function createCards (cards: Array<string>): void {
  const wrapper: HTMLElement = document.createElement('div');
  wrapper.classList.add('cards');
  cards.forEach(card => {

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
  })
  document.body.append(wrapper);
}

function cliclHandler() {
  const cards: Array<HTMLDivElement> = Array.from(document.querySelectorAll('.card'));
  cards.forEach((card) => {
    card.addEventListener('click', ({ target }: { target: EventTarget }) => {
      const elem: Element = (<HTMLElement>target).classList.contains('card') ? <HTMLElement>target : (<HTMLElement>target).closest('.card');
      if (elem) {
        
        elem.classList.toggle('flip');
      }
    })
  })

}

createCards(cards);
cliclHandler();