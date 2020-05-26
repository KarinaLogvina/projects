import { createStore, combineReducers } from 'redux';
import controls from './Components/controlBlock/reducers';

export default createStore(combineReducers({ controls }));
