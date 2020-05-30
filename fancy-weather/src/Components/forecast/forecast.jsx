import  React,  { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "../weather/selectors";
import { getUnit } from "../controlBlock/selectors";

class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  getTempOfTheDay(day) {
    return this.props.unit === 'F' ? day.avgtemp_f : day.avgtemp_c;
  }

  render() {
    const { forecast } = this.props.weatherData;
    const { forecastday } = forecast;
    const days = forecastday.slice(0, 3);
    const weekdays = days.map((obj) => {
      const weekday = new Date(obj.date).toLocaleDateString('en-US', { weekday: 'long' });
      Object.assign(obj, {weekday});
      return obj;
    })

    return (
      <div className='forecast_container'>
        {weekdays.map((obj, index) => (
            <div className='forecast_day' key={index}>
              <div className="weekday">{obj.weekday}</div>
              <div className="temp">{ this.getTempOfTheDay(obj.day) }</div>
              <img className="weather_icon" src={ obj.day.condition.icon } alt='weather icon' />
            </div>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    weatherData: getWeatherData(state),
    unit: getUnit(state),
  }
};

export default connect(
  mapStateToProps
)(Forecast);