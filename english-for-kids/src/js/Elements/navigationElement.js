import Component from './component';

export default class NavigationElement extends Component {
  constructor(category, iconPath) {
    super('li', null, 'nav-item', 'text-light', 'badge', 'cursor-pointer');
    this.setAttribute('style', 'font-size: 1rem');
    this.icon = new Component('img', null, 'icon');
    this.element.textContent = category;
    this.category = category;
    this.icon.setAttribute('src', iconPath);
    this.prepend(this.icon);
  }
}
