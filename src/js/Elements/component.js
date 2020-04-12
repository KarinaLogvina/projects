import Helper from "./helpers"

export default class Component {
    static createElement (tag, id,  ...classList) {
      this.element = Helper.createElement(tag, id, ...classList)
    }

    append(...chaildComponent) {
        this.element.append(...chaildComponent.map((c) => c.element))
    }
}

