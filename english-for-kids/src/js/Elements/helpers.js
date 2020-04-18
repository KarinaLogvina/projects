import cardsInformation from './data';
export default class Helper {
  static createElement(tag, id, ...classes) {
    const elem = document.createElement(tag);
    if (id) elem.id = id;
    if (classes) elem.classList.add(...classes);
    return elem;
  }
}

export const getCards = (category ) => {
  if (category !== 'Main page') {
    return cardsInformation.find((cardObject) => cardObject.category === category).cards;
  }
  return cardsInformation.map((categoryObject) => ({
    image: categoryObject.cards[0].image,
    word: categoryObject.category,
  }));
};
