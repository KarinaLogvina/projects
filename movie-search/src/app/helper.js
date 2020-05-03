
const createPoster = (url) => {
  const posterContainer = document.createElement('div').classList.add('movie-poster');
  const poster = document.createElement('img');
  poster.setAttribute('src', `${url}`);
  posterContainer.append(poster);
  return posterContainer;
};

const createCard = (title, poster, year, rait) => {
  const movieContainer = document.createElement('div').classList.add('mocie-container');
  const movieTitle = document.createElement('h2').classList.add('movie-title');
  const moviePoster = createPoster(poster);
  const movieYear = document.createElement('div').classList.add('movie-year');
  const movieRate = document.createElement('div').classList.add('movie-rait');
  movieTitle.textContent = title;
  movieYear.textContent = year;
  movieRate.textContent = rait;
  movieContainer.append(movieTitle, moviePoster, movieYear, movieRate);
  return movieContainer;
};

export { createPoster, createCard };
