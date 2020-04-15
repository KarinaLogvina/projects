import Helper from './helpers';

export default class Component {
  constructor(tag, id, ...classList) {
    this.element = Helper.createElement(tag, id, ...classList);
  }

  append(...childComponent) {
    this.element.append(...childComponent.map((c) => c.element));
  }

  setAttribute(name, value) {
    this.element.setAttribute(name, value);
  }

  setTextContent(text) {
    this.element.textContent = text;
  }
}
