import { createEvent, events } from './events';

const omdbKey = 'db73ee1f';
const loadCircle = document.querySelector('.loader');
const showRuResult = document.querySelector('.serching-for');
loadCircle.addEventListener(events.show, () => loadCircle.classList.remove('unactive'));
loadCircle.addEventListener(events.hide, () => loadCircle.classList.add('unactive'));
showRuResult.addEventListener(events.show, () => showRuResult.classList.remove('unactive'));
showRuResult.addEventListener(events.hide, () => showRuResult.classList.add('unactive'));
showRuResult
  .addEventListener(events.translarion, (event) => { showRuResult.textContent = event.payload; });


const loadMovieRating = async (imdbID) => {
  try {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${omdbKey}`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {
    return 'Raiting load error';
  }
};

const getLang = async (word) => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/detect?hint=ru,en&key=trnsl.1.1.20200504T194254Z.eff8a96fef4bd463.bf884cb26c02503749a287801028c6555d90c4ca&text=${word}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.lang;
};


const getTranslation = async (word) => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200504T194254Z.eff8a96fef4bd463.bf884cb26c02503749a287801028c6555d90c4ca&text=${word}&lang=ru-en`;
  const res = await fetch(url);
  const json = await res.json();
  return json.text[0];
};

const loadOmdbQuery = async (searchQuery, page = 1) => {
  loadCircle.dispatchEvent(createEvent(events.show));

  const query = searchQuery || 'dream';
  let encoded = encodeURIComponent(query.trim());
  const lang = await getLang(encoded);
  if (lang === 'ru') {
    encoded = await getTranslation(encoded);
    showRuResult.dispatchEvent(createEvent(events.translarion, `Search results for ${searchQuery}`));
  } else {
    showRuResult.dispatchEvent(createEvent(events.translarion, ''));
  }
  const url = `https://www.omdbapi.com/?s=${encoded}&page=${page}&apikey=${omdbKey}`;
  const res = await fetch(url);
  const json = await res.json();

  const addRating = async (obj) => {
    const rate = await loadMovieRating(obj.imdbID);
    Object.assign(obj, { Rating: rate });
    return obj;
  };

  if (json.Response === 'True') {
    const movies = await Promise.all(json.Search.map((obj) => addRating(obj)));
    json.Search = movies;
  }
  loadCircle.dispatchEvent(createEvent(events.hide));
  return json;
};


export { loadOmdbQuery, getTranslation, getLang };
