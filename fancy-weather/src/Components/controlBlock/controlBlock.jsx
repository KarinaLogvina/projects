import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLang, getUnit} from './selectors';
import {setUnit, fetchNewBg, setSearchQuery, setLanguage} from './actions';
import {bindActionCreators} from 'redux';
import getWeatherData from '../weather/selectors';
import {loadWeather} from '../weather/actions';
import {getSeason, getDayTime, select} from './helper';
import getLocation from '../map/selector';
import translate from '../../translate/translate';
import Speech from '../speech/speech.jsx';
class ControlBox extends Component {
  constructor (props) {
    super (props);
    this.state = {
      value: '',
    };
    this.setUnit = this.setUnit.bind (this);
    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
    this.handleLangChange = this.handleLangChange.bind (this);
  }

  handleChange (event) {
    this.setState ({value: event.target.value});
  }

  handleLangChange (event) {
    this.props.loadWeather (undefined, this.props.location, event.target.value);
    this.setLanguage (event.target.value);
  }

  handleSubmit (event) {
    const query = this.state.value;
    this.setSearchQuery (query);
    event.preventDefault ();
  }

  setSearchQuery (query) {
    this.props.loadWeather (query, undefined, this.props.lang);
  }

  setLanguage (lang) {
    this.props.setLanguage (lang);
  }

  setUnit (unit) {
    this.props.setUnit (unit);
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
    const translated = translate[this.props.lang];

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
            onChange={this.handleLangChange}
          >
            <option value="en">
              EN
            </option>
            <option value="ru">
              RU
            </option>
            <option value="be">
              BE
            </option>
          </select>
          <button
            onClick={() => this.setUnit ('C')}
            className={`control-box_options-button__celsius ${select (this.props.unit, 'C')}`}
          >
            °C
          </button>
          <button
            onClick={() => this.setUnit ('F')}
            className={`control-box_options-button__fahrenheit ${select (this.props.unit, 'F')}`}
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
            placeholder={`${translated['search']} ${translated['city']}`}
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
          <Speech />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getLang: getLang (state),
    weatherData: getWeatherData (state),
    location: getLocation (state),
    lang: getLang (state),
    unit: getUnit (state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators (
    {
      setUnit: setUnit,
      fetchNewBg: fetchNewBg,
      setSearchQuery: setSearchQuery,
      loadWeather: loadWeather,
      setLanguage: setLanguage,
    },
    dispatch
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (ControlBox);
