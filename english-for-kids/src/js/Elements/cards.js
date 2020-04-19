import Component from './component';
import CardImage from './cardImage';
import CardTitle from './cardTitle';

export default class Card extends Component {
  constructor(object) {
    super(
      'div',
      null,
      'card',
      'shadow-lg',
      'p-3',
      'mb-5',
      'bg-white',
      'rounded', 'cursor-pointer'
    );
    const { word, translation, image, audioSrc } = object;
    this.cardImage = new CardImage(image);
    this.cardTitle = new CardTitle(word, translation);
    this.cardSound = new Audio(audioSrc);
    this.rotateButton = new Component('img', null, 'rotateButton', 'float-right', 'd-none');
    this.rotateButton.setAttribute('src', './img/rotate.svg');
    this.append(this.cardImage, this.cardTitle, this.rotateButton);
    this.element.addEventListener('animationend', (event) => {
      if(event.animationName === 'rotate_right') this.cardTitle.swapTitle(!this.rotated);
    })
    this.element.addEventListener('mouseleave', () => {
      if(this.rotated === true) {
        this.toggleCard();
      }
    });
  }

  getSound() {
    this.cardSound.play();
  }

  toggleCard() {
    this.element.classList.add('rotate-right');
    this.element.addEventListener('animationend', () => {
      this.element.classList.remove('rotate-right');
      this.element.classList.add('rotate-left');
      this.element.addEventListener('animationend', () => {
        this.element.classList.remove('rotate-left');
        this.rotated = !this.rotated;
      }, {once: true});
    }, { once: true});
  }

  replaceInformation(information) {
    const { word, translation, image, audioSrc, noIcon } = information;
    if(noIcon) {
      this.rotateButton.element.classList.add('d-none');
    } else {
      this.rotateButton.element.classList.remove('d-none');
    }
    this.cardImage.setAttribute('src', image);
    this.cardTitle.element.textContent = word;
    this.cardTitle.translation = translation;
    this.cardTitle.word = word;
    this.cardSound.setAttribute('src', audioSrc);
  }

  toggleDisplayTitle() {
    this.cardTitle.element.classList.toggle('d-none');
    this.rotateButton.element.classList.toggle('d-none');
 
  }
}
