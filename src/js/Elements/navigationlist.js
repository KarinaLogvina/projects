import Component from './component';
import NavigationElement from './navigationElement';
import cardsInformation from './data';

export default class NavigationList extends Component {
  constructor() {
    super(
      'ul',
      null,
      'nav',
      'd-flex',
      'align-content-center',
      'justify-content-between',
      'w-75',
      'm-auto',
      'mr-5'
    );
    const listItemMain = new NavigationElement('Main page');
    const categories = cardsInformation.map((object) => {
      const category = new NavigationElement(object.category);
      return category;
    });
    this.append(listItemMain, ...categories);
  }
}
