import Component from './component';

export default class CardImage extends Component {
  constructor(imgPath) {
    super('img', null, 'card-img-top');
    this.element.setAttribute('src', imgPath);
  }
}
