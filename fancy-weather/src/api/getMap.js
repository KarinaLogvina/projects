const key = 'pk.eyJ1IjoidGlpa3NpIiwiYSI6ImNrYWIxOGFjcDB4b2UzNHM5dHRneWZ6OTYifQ.hewZrIu2YNa_xCNmrC3Dyw';

mapboxgl.accessToken = key;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 9,
});
