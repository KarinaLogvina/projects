import React, { Component } from "react"
import { getQuery, getUnit } from "../controlBlock/selectors";
import { connect } from "react-redux";
import { getWeatherData } from "./selectors";
import { loadWeather } from "./actions";
import { bindActionCreators } from "redux";

class Weather extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadWeather(this.props.query);
  }

  render() {
    const { location, current, forecast } = this.props.weatherData;
    const { name, country, lat, lon, localtime } = location;
    const { temp_c, temp_f, humidity, wind_kph, feelslike_c, condition} = current;
    const { icon, text} = condition;
    const temp = this.props.unit === 'F' ? temp_f : temp_c;
    const weekday = new Date(localtime).toLocaleDateString('en-US', { weekday: 'long' });

    return (
      <div>
        <h3 className="city">{ name }, { country }</h3>
        <div className="day">{ weekday }</div>
        <div className="date">{ localtime }</div>
        <img className="weather_icon" src={ icon } alt='weather icon' />
        <div className="state">{ text }</div>
        <div className="temp">Temperature: { temp }</div>
        <div className="weather_summary">Fells like: { feelslike_c }</div>
        <div className="moist">Humidity: { humidity }</div>
        <div className="wind">Wind: { wind_kph }</div>
        {this.props.children}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { 
    query: getQuery(state), 
    weatherData: getWeatherData(state), 
    unit:  getUnit(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWeather: loadWeather,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
