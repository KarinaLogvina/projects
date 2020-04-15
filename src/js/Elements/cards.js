import Component from './component';
import CardImage from './cardImage';
import CardTitle from './cardTitle';

export default class Card extends Component {
  constructor(object) {
    super(
      'div',
      null,
      'card',
      'card__face',
      'card__face--front',
      'ml-2',
      'shadow-lg',
      'p-3',
      'mb-5',
      'bg-white',
      'rounded'
    );
    const { word, translation, image, audioSrc } = object;
    this.cardImage = new CardImage(image);
    this.cardTitle = new CardTitle(word);
    this.cardSound = new Audio(audioSrc);
    this.translation = translation;
    this.append(this.cardImage, this.cardTitle);
    this.element.addEventListener('click', () => this.getSound());
    this.element.addEventListener('click', () => this.toggleCard());
  }

  getSound() {
    this.cardSound.play();
  }

  toggleCard() {
    this.element.classList.toggle('rotate');
    this.element.classList.toggle('trans-05');
    this.cardTitle.element.textContent = this.translation;
  }

  replaceInformation(information) {
    const { word, translation, image, audioSrc } = information;
    this.cardImage.setAttribute('src', image);
    this.cardTitle.element.textContent = word;
    this.translation = translation;
    this.cardSound.setAttribute('src', audioSrc);
  }
}
