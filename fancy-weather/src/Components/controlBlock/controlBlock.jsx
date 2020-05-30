import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLang } from './selectors';
import { setUnit, fetchNewBg } from './actions';
import { bindActionCreators } from "redux";


class ControlBox extends Component {
    constructor(props) {
        super(props);
    }

    setLanguage(lang) {
        return () => this.props.setLanguage(lang);
    }

    setUnit(unit) {
        return () => this.props.setUnit(unit);
    }

    setBgURL() {
        return () => this.props.fetchNewBg();
    }

    render() {
        return (
            <div className="controlBox">
                <div className="optionsBox">
                    <button onClick={this.setBgURL()}>reload</button>
                    <select name="language" id="lang">
                        <option
                            value="en"
                            selected={this.props.lang === 'en'}
                            onClick={this.setLanguage('en')}
                        >
                            EN
                        </option>
                        <option
                            value="ru"
                            selected={this.props.lang === 'ru'}
                            onClick={this.setLanguage('ru')}
                        >
                            RU
                        </option>
                        <option
                            value="be"
                            selected={this.props.lang === 'be'}
                            onClick={this.setLanguage('be')}
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
                    <input type="text" placeholder="Search city"/>
                    <button type="submit">Search</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {getLang: getLang(state)}
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setUnit: setUnit,
        fetchNewBg: fetchNewBg,
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlBox);