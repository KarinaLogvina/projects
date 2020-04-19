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
    this.rotateButton = new Component('img', null, 'rotateButton', 'float-right');
    this.rotateButton.setAttribute('src', './img/rotate.svg');
    this.append(this.cardImage, this.cardTitle, this.rotateButton);
  }

  getSound() {
    this.cardSound.play();
  }

  toggleCard() {
    this.element.classList.add('rotate');
    this.element.classList.add('trans-1');
    this.addEventListener('transitionend', () => {
      this.element.classList.remove('rotate');
      this.cardTitle.swapTitle();
      this.element.classList.remove('trans-1');
    }, {once: true});
    this.addEventListener('mouseleave', () => this.mouseleaveCard(), {once: true})
  }

  mouseleaveCard() {
    this.element.classList.add('rotate');
    this.element.classList.add('trans-1');
    this.addEventListener('transitionend', () => {
      this.element.classList.remove('rotate');
      this.cardTitle.swapTitle();
      this.element.classList.remove('trans-1');
    }, {once: true});

  }

  replaceInformation(information) {
    const { word, translation, image, audioSrc } = information;
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
