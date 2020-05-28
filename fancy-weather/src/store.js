import { createStore, combineReducers, applyMiddleware  } from 'redux';
import controls from './Components/controlBlock/reducers';
import weather from './Components/weather/reducers';
import thunk from 'redux-thunk';

export default createStore(combineReducers({ controls, weather }), applyMiddleware(thunk));
