const key = '1a1653b6be154bd8a9c54b918edb42a6';

export default getGeocoding = async (location) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${key}=1&no_annotations=1`;
  const res = await fetch(url);
  const json = await res.json();
  return json.text[0];
};
