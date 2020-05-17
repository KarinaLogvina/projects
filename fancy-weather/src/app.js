import React from 'react';
import ReactDOM from 'react-dom';
import getWeathers from './api/getWeathers';

const wether =  getWeathers().then((res) => console.log(res))

const App = () => {
  return (<div className="test">Hello world!</div>);
}


ReactDOM.render(<App/>, document.getElementById('root'));
