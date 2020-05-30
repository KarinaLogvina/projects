const key = '9aBKpEfHoenkvXUs9XiesomK_2cpBLpA_gsLn7Bfwyg';

const getImages = async () => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${key}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.urls.regular;
};

export default getImages;
