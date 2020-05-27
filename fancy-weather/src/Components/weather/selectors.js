export const getTemperature= (store) => store.weather.current.temp_c;
export const getApparentTemperature = (store) => store.weather.current.feelslike_c;
export const getSpeed = (store) => store.weather.data.wind_mph;
export const getMoist = (store) => store.weather.current.humidity;
export const getWeatherIcon = (store) => store.weather.data.current.condition.icon;
export const getCity = (store) => store.weather.data.location.name;
export const getWeatherData = (store) => store.weather.data;