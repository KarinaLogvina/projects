import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLang} from './selectors';
import {setUnit, fetchNewBg, setSearchQuery} from './actions';
import {bindActionCreators} from 'redux';
import getWeatherData from '../weather/selectors';
import {loadWeather} from '../weather/actions';
import {getSeason, getDayTime} from './helper';
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
    const date = new Date ().toLocaleTimeString ('en-US', {
      timeZone: this.props.weatherData.data.location.tz_id,
      month: 'numeric',
      hour: '2-digit',
      hour12: false,
    });
    const [month, hour] = date.split (',');
    const daytime = getDayTime (hour.trim ());
    const season = getSeason (month.trim ());
    return () => this.props.fetchNewBg (daytime, season);
  }

  render () {
    return (
      <div className="control-box_container">
        <div className="control-box_options-container">
          <button
            onClick={this.setBgURL ()}
            className="control-box_options-button__reload"
          >
            <img
              src="https://image.flaticon.com/icons/svg/875/875613.svg"
              alt=""
              className="control-box_options-button__reload__icon"
            />
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
        <form
          className="control-box_form"
          action=""
          onSubmit={event => {
            this.handleSubmit (event);
            this.setBgURL () ();
          }}
        >
          <input
            className="control-box_search"
            type="text"
            placeholder="Search city"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="control-box_options-button__search">
            <img
              src="https://image.flaticon.com/icons/svg/256/256444.svg"
              alt=""
              className="control-box_options-button__search__icon"
            />
          </button>
          <button type="button" className="control-box_options-button__micro">
            <img
              src="https://image.flaticon.com/icons/svg/875/875581.svg"
              alt="microphone"
              className="control-box_options-button__micro__icon"
            />
          </button>
          <button type="button" className="control-box_options-button__play">
            <img
              src="https://image.flaticon.com/icons/svg/832/832642.svg"
              alt="play"
              className="control-box_options-button__play__icon"
            />
          </button>
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
