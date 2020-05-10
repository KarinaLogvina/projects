
const createPoster = (url) => {
  const posterContainer = document.createElement('div');
  posterContainer.classList.add('movie-poster');
  const poster = document.createElement('img');
  if (url === 'N/A') {
    poster.setAttribute('src', 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg');
  } else {
    poster.setAttribute('src', `${url}`);
  }
  posterContainer.append(poster);
  return posterContainer;
};

const createTitle = (title, id) => {
  const movieTitle = document.createElement('a');
  movieTitle.setAttribute('href', `https://www.imdb.com/title/${id}/?ref_=nv_sr_srsg_0`);
  movieTitle.setAttribute('target', '_blank');
  movieTitle.classList.add('movie-title');
  movieTitle.setAttribute('title', `${title}`);
  movieTitle.textContent = title;
  return movieTitle;
};

const createRate = (rate) => {
  const star = document.createElement('img');
  star.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWG8OrTDYMbECoTTNp4qFy1h75DcKBpS8t09nMdPNNnJBprAdB&usqp=CAU');
  star.classList.add('icon');
  const movieRate = document.createElement('div');
  if (rate.imdbRating === 'N/A') {
    movieRate.textContent = 'No rating';
  } else {
    movieRate.textContent = rate.imdbRating;
  }
  movieRate.classList.add('movie-rate');
  movieRate.prepend(star);
  return movieRate;
};

const createYear = (year) => {
  const movieYear = document.createElement('div');
  movieYear.classList.add('movie-year');
  movieYear.textContent = year;
  return movieYear;
};

const createCard = (title, poster, year, rate, id) => {
  const movieContainer = document.createElement('div');
  movieContainer.classList.add('swiper-slide');
  const movieTitle = createTitle(title, id);
  const moviePoster = createPoster(poster);
  const movieYear = createYear(year);
  const movieRate = createRate(rate);
  movieContainer.append(movieTitle, movieYear, moviePoster, movieRate);
  return movieContainer;
};

function parseToPages(elements, pageSize = 4) {
  const result = [];
  while (elements.length) {
    result.push(elements.splice(0, pageSize));
  }
  return result;
}

export {
  createPoster, createCard, parseToPages, createTitle, createRate, createYear,
};
