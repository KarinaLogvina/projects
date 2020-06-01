const key = '60822844c8354a';

const getIPLocation = async () => {
  const url = `https://ipinfo.io?token=${key}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default getIPLocation;
