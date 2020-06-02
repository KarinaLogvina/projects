const key = '5ad8e14aaa96499fb53115745201705';

const getWeathers = async (query, location, lang) => {
  const q = location ? `${location.latitude},${location.longitude}` : query;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=7&lang=${lang}`;
  const res = await fetch(url);
  const json = await res.json();
  if (res.ok) {
    return { data: json };
  }
  return json;
};

export default getWeathers;
