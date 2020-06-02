import { SET_WEATHER_DATA, SET_LOCAL_TIME, SET_WEATHER_ERROR } from './actions';

export const initState = {
  data: {
    location:
      {
        name: 'Minsk',
        region: 'Minsk',
        country: 'Belarus',
        lat: 53.9,
        lon: 27.57,
        localtime: '2020-05-27 15:05',
      },
    current: {
      temp_c: '',
      wind_kph: '',
      humidity: '',
      condition: {
        text: '',
        icon: '',
      },
    },
    forecast: {
      forecastday: [],
    },
  },
};

const weather = (state = initState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA: { return { ...state, data: action.payload.data, error: null }; }
    case SET_WEATHER_ERROR: { return { ...state, error: action.payload.error }; }
    case SET_LOCAL_TIME: { return { ...state, ...action.payload }; }
    default: return state;
  }
};

export default weather;
