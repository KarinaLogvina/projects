import Component from './component';

export default class CardTitle extends Component {
  constructor(word, translation) {
    super('h5', null, 'curd-title');
    this.word = word;
    this.translation = translation;
    this.element.textContent = word;
  }

  swapTitle() {
    const currentTitle = this.element.textContent;
    if(currentTitle === this.word){
      this.element.textContent = this.translation;
    } else {
      this.element.textContent = this.word;
    }
  }
}
