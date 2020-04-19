import Component from './component';

export default class NavigationButton extends Component {
  constructor() {
    super('a', null, 'burger', 'burger1', 'fixed-top');
    this.buttonContent = new Component('span', null, 'burger-line', 'text-primary');
    this.append(this.buttonContent)
  }

  toggleButton() {
    this.element.classList.toggle('selected');
  }
}
