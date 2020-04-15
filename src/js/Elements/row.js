import Component from './component';

export default class Row extends Component {
  constructor() {
    super('div', null, 'd-flex', 'align-content-center', 'justify-content-center', 'flex-wrap');
  }
}
