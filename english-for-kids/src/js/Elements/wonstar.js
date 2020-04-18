import Component from "./component";

export default class WonStar extends Component {
  constructor() {
    super('img', null, 'star');
    this.setAttribute('src', './img/star-win.svg');
  }
}