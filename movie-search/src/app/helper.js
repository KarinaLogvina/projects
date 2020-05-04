
const createPoster = (url) => {
  const posterContainer = document.createElement('div');
  posterContainer.classList.add('movie-poster');
  const poster = document.createElement('img');
  poster.setAttribute('src', `${url}`);
  posterContainer.append(poster);
  return posterContainer;
};

const createCard = (title, poster, year, rate, id) => {
  const movieContainer = document.createElement('div');
  movieContainer.classList.add('swiper-slide');
  const movieTitle = document.createElement('a');
  movieTitle.setAttribute('href', `https://www.imdb.com/title/${id}/?ref_=nv_sr_srsg_0`);
  movieTitle.setAttribute('target', '_blank');
  movieTitle.classList.add('movie-title');
  const moviePoster = createPoster(poster);
  const movieYear = document.createElement('div');
  movieYear.classList.add('movie-year');
  const movieRate = document.createElement('div');
  movieRate.classList.add('movie-rate');
  movieTitle.textContent = title;
  movieYear.textContent = year;
  movieRate.textContent = rate.imdbRating;
  movieContainer.append(movieTitle, moviePoster, movieYear, movieRate);
  return movieContainer;
};

function parseToPages(elements, pageSize = 4) {
  const result = [];
  while (elements.length) {
    result.push(elements.splice(0, pageSize));
  }
  return result;
}

export { createPoster, createCard, parseToPages };
