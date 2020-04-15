import Component from './component';

export default class CardTitle extends Component {
  constructor(word) {
    super('h5', null, 'curd-title');
    this.element.textContent = word;
  }
}
