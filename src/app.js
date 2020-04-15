import Component from './js/Elements/component';
import Row from './js/Elements/row';
import Card from './js/Elements/cards';
import NavigationButton from './js/Elements/navigationButton';
import NavContainer from './js/Elements/navigation';
import Navbar from './js/Elements/navbar';
import GameButton from './js/Elements/gameButton';
import Toggle from './js/Elements/toggle';
import RepeatButton from './js/Elements/repeatButton';
import {getCards} from './js/Elements/helpers';

class App {
  constructor() {
    this.container = new Component('div', null, 'container', 'mt-5');
    this.navigation = new NavContainer();
    this.row = new Row();
    this.navbar = new Navbar();
    this.button = new NavigationButton();
    this.toggle = new Toggle();
    this.gameButton = new GameButton();
    this.repeatButton = new RepeatButton();
    this.cards = getCards('Main page').map((cardObject) => new Card(cardObject));
    this.container.append(this.navigation);
    this.navigation.append(this.navbar);
    this.container.append(this.toggle);
    this.container.append(this.row);
    this.container.append(this.gameButton);
    this.container.append(this.repeatButton);
    this.navbar.append(this.button);
    this.row.append(...this.cards);
    this.button.element.addEventListener('click', () => this.navigation.toggle());

    this.navigation.element.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('nav-item') && !target.classList.contains('badge-warning')) {
        const currentCategory = getCards(event.target.textContent);
        document.querySelectorAll('.nav-item').forEach((el) => el.classList.remove('badge-warning'));
        event.target.classList.add('badge-warning');
        this.navigation.toggle();
        this.cards.forEach((card, index) => {
          card.replaceInformation(currentCategory[index]);
        });
      }
    });
    document.body.append(this.container.element);
    document.querySelector('.nav-item:first-child').classList.add('badge-warning');
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
