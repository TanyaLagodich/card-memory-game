import Game from './CardUI';
import CardDeck from './CardDeck';
import CardGame from './CardGame';
import CardUI from './CardUI';

import { Card } from './_typings/entity';

const cards: Array<Card> = [
  {symbol: 'fa-cat'},
  {symbol: 'fa-cat'},
  {symbol: 'fa-crow'},
  {symbol: 'fa-crow'},
  {symbol: 'fa-dog'},
  {symbol: 'fa-dog'},
  {symbol: 'fa-dove'},
  {symbol: 'fa-dove'},
  {symbol: 'fa-dragon'},
  {symbol: 'fa-dragon'},
  {symbol: 'fa-fish'},
  {symbol: 'fa-fish'}
];

const cardDeck = new CardDeck(cards);
const cardUI = new CardUI();
const cardGame = new CardGame();

cardGame.startNewGame(cardDeck, cardUI);

const cardsWrapper: HTMLDivElement = document.querySelector('.cards');

cardsWrapper.addEventListener('click', ({ target }) => {
  const card: Element = (<HTMLElement>target).classList.contains('card') ? <HTMLElement>target : (<HTMLElement>target).closest('.card');
  if (card) {
    cardUI.turnCard(card.getAttribute('id'));
  }
})
