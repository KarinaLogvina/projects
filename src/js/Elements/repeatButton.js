import Component from './component';

export default class RepeatButton extends Component {
  constructor() {
    super('button', null, 'btn', 'btn-warning', 'float-right');
    const repeatImg = new Component('img', null, 'repeat');
    repeatImg.setAttribute('src', './img/repeat.svg');
    repeatImg.setAttribute('style', 'width: 40px');
    this.append(repeatImg);
  }
}
