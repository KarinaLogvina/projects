import Component from './component';
import NavigationList from './navigationlist';

export default class NavContainer extends Component {
  constructor() {
    super(
      'div',
      null,
      'navcontainer',
      'pos-f-t',
      'h-0',
      'fixed-top',
      'trans-05',
      'overflow-hidden',
      'bg-info',
      'overlay'
    );
    const collapse = new Component('div', null, 'collapse');
    this.append(collapse);
    const collapseBg = new Component('div', null, 'bg-info', 'p-4', 'h-25');
    collapse.append(collapseBg);
    const navigationList = new NavigationList();
    collapseBg.append(navigationList);
  }

  toggle() {
    this.element.classList.toggle('h-0');
    this.element.classList.toggle('h-5');
  }

  close() {
    this.element.classList.remove('h-5');
    this.element.classList.add('h-0');
  }
}
