import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import controls from './Components/controlBlock/reducers';
import weather from './Components/weather/reducers';
import app from './Components/app/reducer';
import location from './Components/map/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export default createStore(combineReducers({
  controls, weather, app, location,
}), enhancer);
