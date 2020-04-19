import Component from './component';

export default class Row extends Component {
  constructor() {
    super('div', null, 'row', 'row-cols-1', 'row-cols-sm-3', 'row-cols-md-4');
  }
}
