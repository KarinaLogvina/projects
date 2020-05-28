import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getLang} from './selectors';
import {setUnit} from './actions';


class ControlBox extends Component () {
  constructor(props) {
    super(props);
  }

  setLanguage = (lang) => () => {
    this.props.setLanguage(lang)
  }

  setUnit = (unit) = () => {
    this.poros.setUnit(unit)
  }

  render() {
    return (
      <div className="controlBox">
        <div className="optionsBox">
          <button>reload</button>
          <select name="language" id="lang">
            <option
              value="en"
              selected={lang === 'en'}
              onClick={this.setLanguage('en')}
            >
              EN
            </option>
            <option
              value="ru"
              selected={lang === 'ru'}
              onClick={ this.setLanguage('ru') }
            >
              RU
            </option>
            <option
              value="be"
              selected={lang === 'be'}
              onClick={ this.setLanguage('be') }
            >
              BE
            </option>
          </select>
          <button
            onClick={this.setUnit('C')}
            className="btn_unit__active"
          >
            °C
          </button>
          <button onClick={this.setUnit('F')} className="btn_unit">
            F
          </button>
        </div>
        <div className="search">
          <input type="text" placeholder="Search city" />
          <button type="submit">Search</button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { getLang: getLang(state) }
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUnit: setUnit,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBox);