/* eslint-disable camelcase */
import translate from '../../translate/translate';

const getCurrentWeatherSpeech = (store) => {
  const weather = store.weather.data;
  const { location, current } = weather;
  const { name, country } = location;
  const {
    temp_c, temp_f, wind_kph, humidity, condition,
  } = current;
  const { text } = condition;
  const { lang, unit } = store.controls;

  const temp = unit === 'C' ? temp_c : temp_f;

  const temperaturaTranslated = translate[lang].temperature;
  const wintKphTranslated = translate[lang].kph;
  const windTranslated = translate[lang].wind;
  const humidityTranslated = translate[lang].humidity;

  return `${name} ${country} ${temperaturaTranslated} ${temp}° ${text} ${windTranslated} ${wind_kph} ${wintKphTranslated} ${humidityTranslated} ${humidity}%`;
};

export default getCurrentWeatherSpeech;
