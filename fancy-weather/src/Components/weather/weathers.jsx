import React, {Component} from 'react';
import {getQuery, getUnit} from '../controlBlock/selectors';
import {connect} from 'react-redux';
import getWeatherData from './selectors';
import {bindActionCreators} from 'redux';
import {loadWeather} from './actions';
import Forecast from '../forecast/forecast.jsx';

const TIME_CONSTANT = {
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
      time: new Date ().toLocaleTimeString ('en-US', {
        timeZone: this.props.weatherData.data.location.tz_id,
        weekday: 'short',
        ...TIME_CONSTANT,
      }),
    };
  }

  componentDidMount () {
    this.props.loadWeather (this.props.query);
    setInterval (() => {
      this.setState ({
        time: new Date ().toLocaleTimeString ('en-US', {
          timeZone: this.props.weatherData.data.location.tz_id,
          weekday: 'short',
          ...TIME_CONSTANT,
        }),
      }), 1000;
    });
    // this.props.loadLocalTime (this.props.location.lat, this.props.location.lon);
  }

  componentDidUpdate () {}

  render () {
    if (this.props.weatherData.error) {
      return <span style={{color: 'red'}}> Пишоу нахер</span>;
    }
    const {location, current} = this.props.weatherData.data;
    const {name, country} = location;
    const {
      temp_c,
      temp_f,
      humidity,
      wind_kph,
      feelslike_c,
      condition,
    } = current;
    const {icon, text} = condition;
    const temp = this.props.unit === 'F' ? temp_f : temp_c;

    return (
      <div className="weather-container">
        <div className="weather_current-weather">
          <h3 className="weather_current-weather__city">{name}, {country}</h3>
          <div className="weather_current-weather__date">{this.state.time}</div>
          <img
            className="weather_current-weather__icon"
            src={icon}
            alt="weather icon"
          />
          <div className="weather_current-weather__state">{text}</div>
          <div className="weather_current-weather__temp">
            Temperature: {temp}°
          </div>
          <div className="weather_current-weather__summary">
            Feels like: {feelslike_c}
          </div>
          <div className="weather_current-weather__humidity">
            Humidity: {humidity}
          </div>
          <div className="weather_current-weather__wind">Wind: {wind_kph}</div>
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
