import Component from './component';

export default class NavigationButton extends Component {
  constructor() {
    super('button', null, 'navbar-toggler', 'fixed-top', 'bg-info');
    this.setAttribute('type', 'button');
    this.buttonContent = new Component('span', null, 'navbar-toggler-icon', 'p-2', 'text-primary');
    this.append(this.buttonContent)
  }

  toggleButton() {
    this.element.classList.add('close');
    this.element.setAttribute('aria-label', 'Close');
    this.buttonContent.classList.remove('navbar-toggler-icon');
    this.buttonContent.setAttribute('aria-hidden', 'true');
    this.buttonContent.setTextContent.innerHTML = '';
  }
}
