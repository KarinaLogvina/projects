import Component from './component';

export default class NavigationElement extends Component {
  constructor(category) {
    super('li', null, 'nav-item', 'text-light', 'badge');
    this.element.textContent = category;
    this.category = category;
  }
}
