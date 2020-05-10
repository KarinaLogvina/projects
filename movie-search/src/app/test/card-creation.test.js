/* eslint-disable */

import { createPoster, createRate } from "../helper"

test('Create movie poster with default poster if src is undefines', () => {
  const posterContainer = createPoster('N/A');
  const poster = posterContainer.querySelector('img');
  expect(poster.getAttribute('src')).toBe('https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg')
})

test('Create movie rating when imdb rating is not defined', () => {
  const movieRate = createRate({imdbRating: 'N/A'});
  expect(movieRate.textContent).toBe('No rating');
})