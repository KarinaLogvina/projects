import  React,  { Component } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from "react-redux";
import { getWeatherData } from "../weather/selectors";

class Maps extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { location } = this.props.weatherData;
    const { lat, lon } = location;

    return(
      <YMaps>
        <div>
          <Map defaultState={{ center: [ lat, lon ], zoom: 9 }}>
            <Placemark geometry={[ lat, lon ]} />
          </Map>
        </div>
      </YMaps>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    weatherData: getWeatherData(state)
  }
};

export default connect(
  mapStateToProps,
)(Maps);
