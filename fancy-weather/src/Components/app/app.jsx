import React, {Component} from 'react';
import ControlBox from '../controlBlock/controlBlock.jsx';
import {connect} from 'react-redux';
import Weather from '../weather/weathers.jsx';
import Maps from '../map/map.jsx';
import Error from '../error/errorHendle.jsx';
import {bindActionCreators} from 'redux';
import getBgUrl from './selectors.js';
import getLocation from '../map/selector.js';
import {askGeoLoc, loadIP} from '../map/action';

class App extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    this.props.askGeoLoc ();
    this.props.loadIP ();
  }

  render () {
    return (
      <div
        className="app"
        style={{backgroundImage: `url(${this.props.bgURL})`}}
      >
        <div className="wrapper">
          <ControlBox />
          <Error />
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
      loadIP: loadIP,
    },
    dispatch
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (App);
