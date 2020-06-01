const coordToDMS = (deg, dirs) => {
  let d = Math.floor(deg);
  const minFloat = (deg - d) * 60;
  let m = Math.floor(minFloat);
  const secFloat = (minFloat - m) * 60;
  let s = Math.round(secFloat);
  if (s === 60) {
    m += 1;
    s = 0;
  }
  if (m === 60) {
    d += 1;
    m = 0;
  }
  return (`${d}° ${m}' ${s}" ${d > 0 ? dirs[0] : dirs[1]}`);
};

const latitudeToDMS = (latitude) => coordToDMS(latitude, ['N', 'S']);
const longitudeToDMS = (latitude) => coordToDMS(latitude, ['E', 'W']);

const positionToGeoLocData = (position) => ({
  latitude: position.coords.latitude,
  longitude: position.coords.longitude,
});

export { latitudeToDMS, longitudeToDMS, positionToGeoLocData };
