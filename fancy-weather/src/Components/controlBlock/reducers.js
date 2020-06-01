import {
  SetLanguage, SetCity, SetUnit, SetSearchQuery,
} from './actions';

const initState = {
  lang: 'en',
  unit: 'C',
  city: 'Minsk',
  query: '',
};

const controls = (state = initState, action) => {
  switch (action.type) {
    case SetLanguage: { return { ...state, lang: action.payload.lang }; }
    case SetCity: { return { ...state, city: action.payload.city }; }
    case SetUnit: { return { ...state, unit: action.payload.unit }; }
    case SetSearchQuery: { return { ...state, query: action.payload.query }; }
    default: return state;
  }
};

export default controls;
