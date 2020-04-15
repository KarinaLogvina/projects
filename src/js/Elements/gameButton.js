import Component from './component';

export default class Button extends Component {
  constructor() {
    super('button', null, 'btn', 'btn-success');
    this.setTextContent('Play Game');
  }
}
