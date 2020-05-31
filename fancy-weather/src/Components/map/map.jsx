import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from 'react-redux';
import getWeatherData from '../weather/selectors';

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
          <div>
            <Map
              width="100%"
              height="240px"
              defaultState={{center: [lat, lon], zoom: 9}}
            >
              <Placemark geometry={[lat, lon]} />
            </Map>
          </div>
        </YMaps>
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
