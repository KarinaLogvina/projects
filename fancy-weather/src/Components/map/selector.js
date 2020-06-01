const getLocation = (store) => {
  const geoData = store.location.data;
  const { ipData } = store.location;
  if (geoData.longitude) {
    return geoData;
  }
  return ipData;
};

export default getLocation;
