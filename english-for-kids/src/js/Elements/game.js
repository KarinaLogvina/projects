import Component from "./component";
import Star from "./wonstar";

export default class Game {
  constructor() {
    this.correctAudio = new Audio('./audio/correct.mp3');
    this.errorAudio = new Audio('./audio/error.mp3');
    this.defeatAudio = new Audio('./audio/failure.mp3');
    this.winAudio = new Audio('./audio/success.mp3');

  }
  startGame(cards) {
    this.currentCards = [...cards];
    this.nextRandomCard();
    this.mistakes = 0;
    this.playAudioCurrentCard();
  }

  nextRandomCard() {
    this.randomIndex = Math.floor(Math.random() * this.currentCards.length);
    this.randomCard = this.currentCards[this.randomIndex];
  }

  playAudioCurrentCard() {
    this.randomCard.getSound();
  }

  selectCard(card) {
    let isCorrect = false;
    if(card.cardTitle.word === this.randomCard.cardTitle.word) {
      isCorrect = true;
      this.rightCard();
    } else {
      this.wrongCard();
    }
    return isCorrect;
  }

  rightCard() {
    this.correctAudio.play();
    this.randomCard.setAttribute('style', 'opacity: 0.5');
    this.currentCards.splice(this.randomIndex, 1);
    if(this.currentCards.length === 0) {
      this.gameOver = true;
    } else {
      this.nextRandomCard();
      this.playAudioCurrentCard();
    }
  }

  wrongCard() {
    this.mistakes += 1;
    this.errorAudio.play();
  }
}