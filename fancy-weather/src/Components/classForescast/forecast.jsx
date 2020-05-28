import React, { Component } from "react";

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date().toLocaleTimeString()};
  }
  
  componentDidMount() {
      setInterval(() => {
          this.setState({
          time: new Date().toLocaleTimeString()
        }), 1000
      }
    )
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='forecast_container'>
        <h2>It is { this.state.time }.</h2>
        <div className='forecast_first'></div>
        <div className='forecast_second'></div>
        <div className='forecast_third'></div>
      </div>
    )
  }
}