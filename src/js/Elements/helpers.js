export default class Helper {
    static createElement(tag, id, ...classes) {
      const elem = document.createElement(tag);
      if (id) elem.id = id;
      if (classes) elem.classList.add(...classes);
      return elem;
    }
  }