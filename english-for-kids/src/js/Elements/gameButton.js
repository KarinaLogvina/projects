import Component from './component';

export default class Button extends Component {
  constructor() {
    super('button', null, 'btn', 'btn-success', 'btn-lg', 'btn-block', 'd-none');
    this.setTextContent('Play Game');
  }

  toggle() {
    this.element.classList.toggle('d-none');
  }
}
