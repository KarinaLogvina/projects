import Component from './component';

export default class Toggle extends Component {
  constructor() {
    super('div', null, 'custom-control', 'custom-switch', 'mb-3');
    const toggle = new Component('input', 'customSwitch1', 'custom-control-input');
    const label = new Component('label', null, 'custom-control-label');
    toggle.setAttribute('type', 'checkbox');
    label.setAttribute('for', 'customSwitch1');
    label.setTextContent('Train');
    this.append(toggle);
    this.append(label);
  }
}
