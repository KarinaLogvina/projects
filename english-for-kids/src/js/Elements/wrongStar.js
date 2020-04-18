import Component from "./component";

export default class WrongStar extends Component {
  constructor() {
    super('img', null, 'star');
    this.setAttribute('src', './img/star.svg');
  }
}