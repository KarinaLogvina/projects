import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadWeather } from './actions';
import { getCity, getWeatherData } from './selectors';
import { getQuery } from '../controlBlock/selectors';

function Weather () {
  const query = useSelector(getQuery);
  const weatherData = useSelector(getWeatherData)
  const { location, current, forecast } = weatherData;
  const { name, country, lat, lon, localtime } = location;
  const { temp_c, humidity, wind_kph, feelslike_c, condition} = current;
  const { icon, text} = condition
  
  const dispatch = useDispatch ();

  useEffect(() => {
    loadWeather(dispatch, query)
  })

  return (
    <div>
      <h3 className="city">{ name }, { country }</h3>
      <div className="date">{ localtime }</div>
      <div className="time">{  }</div>
      <img className="weather_icon" src={icon} alt='weather icon' />
      <div className="temp">Temperature: { temp_c }</div>
      <div className="weather_summary">Fells like: { feelslike_c }</div>
      <div className="moist">Humidity: { humidity }</div>
      <div className="wind">Wind: { wind_kph }</div>
    </div>
  );
}

export default Weather;
