import Component from './js/Elements/component';
import Row from './js/Elements/row';
import Card from './js/Elements/cards';
import NavigationButton from './js/Elements/navigationButton';
import NavContainer from './js/Elements/navigation';
import Navbar from './js/Elements/navbar';
import GameButton from './js/Elements/gameButton';
import Toggle from './js/Elements/toggle';
import RepeatButton from './js/Elements/repeatButton';
import { getCards } from './js/Elements/helpers';
import Game from './js/Elements/game';
import FailedGame from './js/Elements/failedGame';
import WonGame from './js/Elements/wonGame';
import WonStar from './js/Elements/wonstar';
import WrongStar from './js/Elements/wrongStar';

class App {
  constructor() {
    this.container = new Component('div', null, 'container', 'pt-10', 'pb-4', 'position-relative', 'overflow-hidden');
    this.navigation = new NavContainer();
    this.row = new Row();
    this.navbar = new Navbar();
    this.button = new NavigationButton();
    this.toggle = new Toggle();
    this.gameButton = new GameButton();
    this.repeatButton = new RepeatButton();
    this.game = new Game();
    this.starContainer = new Component('div', null, 'star-container', 'd-flex', 'justify-content-start', 'overflow-hidden', 'w-100');
    this.currentCategory = 'Main page';
    this.cards = getCards(this.currentCategory).map((cardObject) => new Card(cardObject));
    this.container.append(this.navigation);
    this.navigation.append(this.navbar);
    this.container.append(this.toggle);
    this.container.append(this.row);
    this.container.append(this.gameButton);
    this.container.append(this.repeatButton);
    this.container.prepend(this.starContainer);
    this.navbar.append(this.button);
    this.columns = this.cards.map((card) => {
      const coll = new Component('div', null, 'col', 'd-flex', 'justify-content-center');
      coll.append(card)
      return coll;
    });
    this.row.append(...this.columns);
    this.button.element.addEventListener('click', () => { this.navigation.toggle(); this.button.toggleButton() });
    this.gameIsOn = false;

    this.gameButton.addEventListener('click', () => {
      this.gameButton.toggle();
      this.repeatButton.toggle();
      this.toggle.changeDisplay();
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

    this.cards.forEach((card) => {
      card.addEventListener('click', (event) => {
        if (this.currentCategory === 'Main page') {
          this.changeCategory(card.cardTitle.word);
        } else {
          if (this.gameIsOn === false) {
            card.toggleCard();
            card.getSound();
          } else {  
            const resultOfSelectCard = this.game.selectCard(card);
            if (resultOfSelectCard === true) {
              const winStar = new WonStar();
              this.starContainer.prepend(winStar);
            } else {
              const winStar = new WrongStar();
              this.starContainer.prepend(winStar);
            }
            if (this.game.gameOver === true) {
              if (this.game.mistakes > 0) {
                const failedGameScreen = new FailedGame(this.game.mistakes);
                this.container.prepend(failedGameScreen);
                this.game.defeatAudio.play();
              } else {
                const wonGameScreen = new WonGame(this.game.mistakes);
                this.container.prepend(wonGameScreen);
                this.game.winAudio.play();
              }
              setTimeout(() => window.location.reload(true), 2000);
            }
          }
        }
      });
    });

    this.toggle.addEventListener('change', (event) => {
      this.cards.forEach((card) => card.toggleDisplayTitle());
      this.gameButton.toggle();
      if (event.target.checked) {
        this.gameIsOn = event.target.checked;
      } else {
        this.gameIsOn = false;
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
    this.button.element.classList.remove('selected')
    this.navigation.close();
  }
}

window.addEventListener('load', () => {
  const app = new App();
});
