import Component from './component';

export default class NavigationElement extends Component {
  constructor(category) {
    super('li', null, 'nav-item', 'text-light', 'badge');
    this.setAttribute('style', 'font-size: 1rem')
    this.element.textContent = category;
    this.category = category;
  }
}
