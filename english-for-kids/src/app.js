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
import Game from './js/Elements/game';
import FailedGame from './js/Elements/failedGame';
import WonGame from './js/Elements/wonGame';

class App {
  constructor() {
    this.container = new Component('div', null, 'container', 'mt-5', 'position-relative');
    this.navigation = new NavContainer();
    this.row = new Row();
    this.navbar = new Navbar();
    this.button = new NavigationButton();
    this.toggle = new Toggle();
    this.gameButton = new GameButton();
    this.repeatButton = new RepeatButton();
    this.game = new Game();
    this.currentCategory = 'Main page';
    this.cards = getCards(this.currentCategory).map((cardObject) => new Card(cardObject));
    this.container.append(this.navigation);
    this.navigation.append(this.navbar);
    this.container.append(this.toggle);
    this.container.append(this.row);
    this.container.append(this.gameButton);
    this.container.append(this.repeatButton);
    this.navbar.append(this.button);
    this.row.append(...this.cards);
    this.button.element.addEventListener('click', () => this.navigation.toggle());
    this.gameIsOn = false;

    this.gameButton.addEventListener('click', () => {
      this.gameButton.toggle();
      this.repeatButton.toggle();
      this.game.startGame(this.cards);
      this.repeatButton.addEventListener('click', () => {
        this.game.playAudioCurrentCard();
      })
    });

    this.navigation.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('nav-item') && !target.classList.contains('badge-warning')) {
        this.changeCategory(target.textContent);
      }
    });

    this.cards.forEach((el) => {
      el.addEventListener('click', (event) => {
        if(this.currentCategory === 'Main page') {
          this.changeCategory(el.cardTitle.word);
        } else {
          if(this.gameIsOn === false) {
            el.toggleCard();
            el.getSound();
          } else {
            this.game.selectCard(el);
            if(this.game.gameOver === true) {
              if(this.game.mistakes > 0) {
                const failedGameScreen = new FailedGame(this.game.mistakes);
                this.container.prepend(failedGameScreen);
                this.game.defeatAudio.play();
              } else {
                const wonGameScreen = new WonGame(this.game.mistakes);
                this.container.prepend(wonGameScreen);
                this.game.winAudio.play();
              }
            }
          }
        }
      });
    });

    this.toggle.addEventListener('change', (event) => {
      this.cards.forEach((card) => card.toggleDisplayTitle());
      this.gameButton.toggle();
      if(event.target.checked) {
        this.gameIsOn = event.target.checked;
      }
    })
    document.body.append(this.container.element);
    document.querySelector('.nav-item:first-child').classList.add('badge-warning');
  }

  changeCategory(category) {
    this.currentCategory = category;
    const currentCategory = getCards(category);
    this.cards.forEach((card, index) => {
      card.replaceInformation(currentCategory[index]);
    });
    document.querySelectorAll('.nav-item').forEach((el) => el.classList.remove('badge-warning'));
    [...document.querySelectorAll('.nav-item')].find((el) => el.textContent === category).classList.add('badge-warning');
    this.navigation.close();
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
