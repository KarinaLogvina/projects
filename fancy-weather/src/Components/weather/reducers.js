import { SetWeatherData, SetLocalTime, SetWeatherError } from './actions';

const initState = {
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
    case SetWeatherData: { return { ...state, data: action.payload.data, error: null }; }
    case SetWeatherError: { return { ...state, error: action.payload.error }; }
    case SetLocalTime: { return { ...state, ...action.payload }; }
    default: return state;
  }
};

export default weather;
