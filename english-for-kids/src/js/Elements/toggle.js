import Component from './component';

export default class Toggle extends Component {
  constructor() {
    super('section', null);
    const toggle = new Component('input', 'switch');
    const label = new Component('label', null);
    const train = new Component('span', null, 'on', 'train', 'game')
    const play = new Component('span', null, 'off', 'play', 'game');
    const switcherThing = new Component('i', null, 'toggler')
    train.setTextContent('Train');
    play.setTextContent('Play');
    toggle.setAttribute('type', 'checkbox');
    label.setAttribute('for', 'switch');
    label.append(switcherThing);
    this.append(toggle, label, play, train);
  }

  changeDisplay() {
    this.element.setAttribute('style', 'visibility:hidden');
  }
}
