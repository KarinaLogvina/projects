const getWeathers = async (location) => {
  const url = `http://wttr.in/${location}?format=j1`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default getWeathers;
