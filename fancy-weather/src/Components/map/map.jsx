import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from 'react-redux';
import getWeatherData from '../weather/selectors';
import {latitudeToDMS, longitudeToDMS} from './helper';

class Maps extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    const {location} = this.props.weatherData.data;
    const {lat, lon} = location;

    return (
      <div className="map">
        <YMaps>
          <div className="map_image">
            <Map
              width="100%"
              height="240px"
              state={{center: [lat, lon], zoom: 9}}
            >
              <Placemark geometry={[lat, lon]} />
            </Map>
          </div>
        </YMaps>
        <div>Latitude: {latitudeToDMS (lat)}</div>
        <div>Longitude: {longitudeToDMS (lon)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: getWeatherData (state),
  };
};

export default connect (mapStateToProps) (Maps);
