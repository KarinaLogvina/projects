const key = '5ad8e14aaa96499fb53115745201705';

const getWeathers = async (location) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=5ad8e14aaa96499fb53115745201705&q=${location}&days=7`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default getWeathers;
