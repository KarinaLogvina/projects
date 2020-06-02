import React, {Component} from 'react';
import {getQuery, getUnit, getLang} from '../controlBlock/selectors';
import {connect} from 'react-redux';
import getWeatherData from './selectors';
import {bindActionCreators} from 'redux';
import {loadWeather} from './actions';
import Forecast from '../forecast/forecast.jsx';
import getLocation from '../map/selector';
import translate from '../../translate/translate';

export const TIME_CONSTANT = {
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
};
class Weather extends Component {
  constructor (props) {
    super (props);
    this.state = {
      time: new Date ().toLocaleTimeString (`${this.props.lang}-RU`, {
        timeZone: this.props.weatherData.data.location.tz_id,
        weekday: 'short',
        ...TIME_CONSTANT,
      }),
      location: {
        latitude: '1111',
        longitude: '1111',
      },
      query: 'Minsk',
      value: '',
      lang: 'en',
    };
  }

  componentDidMount () {
    this.props.loadWeather (
      this.props.query,
      this.props.location,
      this.props.lang
    );
    setInterval (() => {
      this.setState ({
        time: new Date ().toLocaleTimeString (`${this.props.lang}-RU`, {
          timeZone: this.props.weatherData.data.location.tz_id,
          weekday: 'short',
          ...TIME_CONSTANT,
        }),
      }), 1000;
    });
  }

  componentDidUpdate () {}

  render () {
    const {location, current} = this.props.weatherData.data;
    const {name, country} = location;
    const {
      temp_c,
      temp_f,
      humidity,
      wind_kph,
      feelslike_c,
      feelslike_f,
      condition,
    } = current;
    const {icon, text} = condition;
    const temp = this.props.unit === 'F' ? temp_f + '°F' : temp_c + '°C';
    const feelslike = this.props.unit === 'F'
      ? feelslike_f + '°F'
      : feelslike_c + '°C';
    const translated = translate[this.props.lang];

    return (
      <div className="weather-container">
        <div className="weather_current-weather">
          <h3 className="weather_current-weather__city">
            {name}, {country}
          </h3>
          <div className="weather_current-weather__date">
            {this.state.time}
          </div>
          <div className="weather_current-weather__impo">
            <div className="weather_current-weather__temp">
              {temp}
            </div>
            <img
              className="weather_current-weather__icon"
              src={icon}
              alt="weather icon"
            />
          </div>
          <div className="weather_current-weather__state">{text}</div>
          <div className="weather_current-weather__summary">
            {translated['feels_like']} {feelslike}
          </div>
          <div className="weather_current-weather__humidity">
            {translated['humidity']} {humidity}%
          </div>
          <div className="weather_current-weather__wind">
            {translated['wind']} {wind_kph} {translated['kph']}
          </div>
        </div>
        <div className="weather_forecast-weather">
          <Forecast />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: getQuery (state),
    weatherData: getWeatherData (state),
    unit: getUnit (state),
    location: getLocation (state),
    lang: getLang (state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators (
    {
      loadWeather: loadWeather,
    },
    dispatch
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (Weather);
