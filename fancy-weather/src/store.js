import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import controls from './Components/controlBlock/reducers';
import weather from './Components/weather/reducers';
import thunk from 'redux-thunk';
import app from './Components/app/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export default createStore(combineReducers({ controls, weather, app }), enhancer);
