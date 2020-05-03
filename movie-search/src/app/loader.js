const omdbKey = 'db73ee1f';
const loadMovieRating = async (imdbID) => {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${omdbKey}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const loadOmdbQuery = async (searchQuery, page = 1) => {
  const encoded = encodeURIComponent(searchQuery);
  const url = `http://www.omdbapi.com/?s=${encoded}&page=${page}&apikey=${omdbKey}`;
  const res = await fetch(url);
  const json = await res.json();

  const addRating = async (obj) => {
    const rate = await loadMovieRating(obj.imdbID);
    Object.assign(obj, { Rating: rate });
    return obj;
  };

  if (json.Response === 'True') {
    return Promise.all(json.Search.map((obj) => addRating(obj)));
  }

  return json.Error;
};

export default loadOmdbQuery;
