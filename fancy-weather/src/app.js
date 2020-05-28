import React from 'react';
import ReactDOM from 'react-dom';
import ControlBox from './Components/controlBlock/controlBlock.jsx';
import { Provider } from 'react-redux';
import store from './store'
import Weather from './Components/weather/weathers.jsx';
import Forecast from './Components/classForescast/forecast.jsx';

const App = () => {
  return (<Provider store={store}>
    <ControlBox/>
    <Weather/>
    <Forecast/>
  </Provider>);
}


ReactDOM.render(<App/>, document.getElementById('root'));
