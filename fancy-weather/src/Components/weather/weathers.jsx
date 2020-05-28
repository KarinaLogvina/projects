import React, { Component } from "react"
import { getQuery } from "../controlBlock/selectors";
import { connect } from "react-redux";
import { getWeatherData } from "./selectors";
import { loadWeather } from "./actions";
import { bindActionCreators } from "redux";

class Weather extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(loadWeather(this.props.query));
  }

  componentDidUpdate() {

  }

   render() {
    const { location, current, forecast } = this.props.weatherData;
    const { name, country, lat, lon, localtime } = location;
    const { temp_c, humidity, wind_kph, feelslike_c, condition} = current;
    const { icon, text} = condition
    console.log(this.props.weatherData)

    return (
      <div>
        <h3 className="city">{ name }, { country }</h3>
        <div className="date">{ localtime }</div>
        <img className="weather_icon" src={ icon } alt='weather icon' />
        <div className="state">{ text }</div>
        <div className="temp">Temperature: { temp_c }</div>
        <div className="weather_summary">Fells like: { feelslike_c }</div>
        <div className="moist">Humidity: { humidity }</div>
        <div className="wind">Wind: { wind_kph }</div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { query: getQuery(state), weatherData: getWeatherData(state) }
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
