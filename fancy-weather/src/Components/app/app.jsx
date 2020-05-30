import React, { Component } from 'react';
import ControlBox from '../controlBlock/controlBlock.jsx';
import { connect } from "react-redux";
import Weather from '../weather/weathers.jsx';
import Forecast from '../forecast/forecast.jsx';
import Maps from '../map/map.jsx'
import { getBgUrl } from './selectors.js';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="app" style={{backgroundImage: `url(${this.props.bgURL})`}}>
        <ControlBox/>
        <Weather>
          <Forecast/>
        </Weather>
        <Maps/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    bgURL: getBgUrl(state)
  }
};

export default connect(
  mapStateToProps
)(App);
