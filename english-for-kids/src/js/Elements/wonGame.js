import Component from "./component";

export default class WonGame extends Component {
  constructor(mistakes) {
    super('div', null, 'failedGame', 'd-flex', 'h-50', 'w-100', 'flex-column', 'justify-content-center', 'align-items-center', 'h-100', 'bg-light', 'position-absolute');
    const gameOverBanner = new Component('h2', null, 'gameOverBanner', 'mb-5');
    gameOverBanner.setTextContent(mistakes + ' Errors');        
    const sadPicture = new Component('img', null, 'sad', 'mb-5');
    sadPicture.setAttribute('src', './img/success.jpg');
    this.append(gameOverBanner, sadPicture);
  }
}