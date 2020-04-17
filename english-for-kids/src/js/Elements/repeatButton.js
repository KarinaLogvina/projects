import Component from './component';

export default class RepeatButton extends Component {
  constructor() {
    super('button', null, 'btn', 'btn-warning', 'btn-lg', 'btn-block', 'd-none');
    const repeatImg = new Component('img', null, 'repeat');
    repeatImg.setAttribute('src', './img/repeat.svg');
    repeatImg.setAttribute('style', 'width: 40px');
    this.append(repeatImg);
  }

  toggle() {
    this.element.classList.toggle('d-none');
  }
}
