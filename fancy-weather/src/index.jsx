import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import App from './Components/app/app.jsx'

const WeatherApp = () => {
  return (<Provider store={store}>
    <App />
  </Provider>);
}


ReactDOM.render(<WeatherApp/>, document.getElementById('root'));
