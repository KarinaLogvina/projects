import React, {Component} from 'react';
import ControlBox from '../controlBlock/controlBlock.jsx';
import {connect} from 'react-redux';
import Weather from '../weather/weathers.jsx';
import Maps from '../map/map.jsx';
import {bindActionCreators} from 'redux';
import getBgUrl from './selectors.js';
import getLocation from '../map/selector.js';
import {askGeoLoc} from '../map/action';

class App extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    this.props.askGeoLoc ();
  }

  render () {
    return (
      <div
        className="app"
        style={{backgroundImage: `url(${this.props.bgURL})`}}
      >
        <div className="wrapper">
          <ControlBox />
          <div className="content-box">
            {this.props.location.latitude && <Weather />}
            <Maps />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bgURL: getBgUrl (state),
    location: getLocation (state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators (
    {
      askGeoLoc: askGeoLoc,
    },
    dispatch
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (App);
