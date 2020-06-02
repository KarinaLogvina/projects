import {
  SET_LANGUAGE, SET_CITY, SET_UNIT, SET_SEARCH_QUERY, VOLUME_UP, VOLUME_DOWN,
} from './actions';

export const initState = {
  lang: localStorage.getItem('lang') || 'en',
  unit: localStorage.getItem('unit') || 'C',
  city: 'Minsk',
  query: '',
  volume: 0.5,
};

const controls = (state = initState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      localStorage.setItem('lang', action.payload.lang);
      return { ...state, lang: action.payload.lang }; }
    case SET_CITY: { return { ...state, city: action.payload.city }; }
    case SET_UNIT: {
      localStorage.setItem('unit', action.payload.unit);
      return { ...state, unit: action.payload.unit }; }
    case SET_SEARCH_QUERY: { return { ...state, query: action.payload.query }; }
    case VOLUME_UP: { return { ...state, volume: Math.min(1.0, state.volume + 0.2) }; }
    case VOLUME_DOWN: { return { ...state, volume: Math.max(0.1, state.volume - 0.2) }; }
    default: return state;
  }
};

export default controls;
