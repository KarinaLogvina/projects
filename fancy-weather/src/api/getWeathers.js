const key = '5ad8e14aaa96499fb53115745201705';

const getWeathers = async (location) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default getWeathers;
