import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from 'react-redux';
import getWeatherData from '../weather/selectors';
import {latitudeToDMS, longitudeToDMS} from './helper';
import translate from '../../translate/translate';
import {getLang} from '../controlBlock/selectors';

class Maps extends Component {
  constructor (props) {
    super (props);
    this.state = {
      value: '',
      lang: 'en',
    };
  }

  componentDidMount () {
    const currentLang = localStorage.getItem ('lang') || 'en';
    this.setState ({lang: currentLang});
  }

  render () {
    const {location} = this.props.weatherData.data;
    const {lat, lon} = location;
    const translated = translate[this.state.lang];

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
        <div>{translated['latitude']}: {latitudeToDMS (lat)}</div>
        <div>{translated['longitude']}: {longitudeToDMS (lon)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: getWeatherData (state),
    lang: getLang (state),
  };
};

export default connect (mapStateToProps) (Maps);
