import { createStore, combineReducers } from 'redux';
import controls from './Components/controlBlock/reducers';
import weather from './Components/weather/reducers';

export default createStore(combineReducers({ controls, weather }));
