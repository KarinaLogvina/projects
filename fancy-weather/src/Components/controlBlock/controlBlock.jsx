import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLang} from './selectors';
import {setUnit, fetchNewBg, setSearchQuery} from './actions';
import {bindActionCreators} from 'redux';
import getWeatherData from '../weather/selectors';
import {loadWeather} from '../weather/actions';

// const localTimeToDaytime = (localtime) => {
//     const date = new Date(localtime * 1000);
//     const hours = date.getHours();
//     if ( hours === 23 || (hours >= 0 && hours <= 7) ) {
//         return 'night';
//     } else {
//         return 'day'
//     }
// }
class ControlBox extends Component {
  constructor (props) {
    super (props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
  }

  handleChange (event) {
    this.setState ({value: event.target.value});
  }

  handleSubmit (event) {
    const query = this.state.value;
    this.setSearchQuery (query);
    event.preventDefault ();
  }

  setSearchQuery (query) {
    this.props.loadWeather (query);
  }

  setLanguage (lang) {
    return () => this.props.setLanguage (lang);
  }

  setUnit (unit) {
    return () => this.props.setUnit (unit);
  }

  setBgURL () {
    // const dayTime = localTimeToDaytime(this.props.weatherData.location.localtime_epoch);
    // const season = localTimeToSeason(this.props.weatherData.location.localtime_epoch);
    return () => this.props.fetchNewBg ();
  }

  render () {
    return (
      <div className="control-box_container">
        <div className="control-box_options-container">
          <button
            onClick={this.setBgURL ()}
            className="control-box_options-button__reload"
          >
            Reload
          </button>
          <select
            className="control-box_options-button__lang"
            name="language"
            id="lang"
            value={this.props.lang}
          >
            <option value="en" onClick={this.setLanguage ('en')}>
              EN
            </option>
            <option value="ru" onClick={this.setLanguage ('ru')}>
              RU
            </option>
            <option value="be" onClick={this.setLanguage ('be')}>
              BE
            </option>
          </select>
          <button
            onClick={this.setUnit ('C')}
            className="control-box_options-button__celsius"
          >
            °C
          </button>
          <button
            onClick={this.setUnit ('F')}
            className="control-box_options-button__fahrenheit"
          >
            F
          </button>
        </div>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="search">
            <input
              type="text"
              placeholder="Search city"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="control-box_options-button__search"
            >
              Search
            </button>
            <button className="control-box_options-button__micro">Micro</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getLang: getLang (state),
    weatherData: getWeatherData (state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators (
    {
      setUnit: setUnit,
      fetchNewBg: fetchNewBg,
      setSearchQuery: setSearchQuery,
      loadWeather: loadWeather,
    },
    dispatch
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (ControlBox);
