export default getWeathers = async (location) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=5ad8e14aaa96499fb53115745201705=${location}&days=3`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return json;
};
