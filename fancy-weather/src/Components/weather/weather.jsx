import React from 'react';

function Weather () {
  return (
    <div>
      <h3 className="city">Minsk</h3>
      <div className="date">{new Date ().toLocaleDateString ()}</div>
      <div className="time">{new Date ().toLocaleTimeString ()}</div>
      <div className="temp" />
      <div className="weather_summary" />
      <div className="weather_icon" />
    </div>
  );
}

export default Weather;
