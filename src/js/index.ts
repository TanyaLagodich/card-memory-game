import './style/main.scss';

const cards: Array<string> = ['fa-cat', 'fa-crow', 'fa-dog', 'fa-dove', 'fa-dragon', 'fa-fish'];

function createCards (cards: Array<string>): void {
  const wrapper = document.createElement('div');
  wrapper.classList.add('cards');
  cards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    const icon = document.createElement('i');
    icon.className = `fas ${card}`;
    div.appendChild(icon);
    wrapper.appendChild(div);
  })
  document.body.appendChild(wrapper);
}

createCards(cards);