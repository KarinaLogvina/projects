import { SetTemp, SetApparent, SetSpeed, SetMoist, SetWeatherIcon, SetWeatherData } from "./actions";


const initState = {
  data: {
    location:
      {
        "name":"Minsk",
        "region":"Minsk",
        "country":"Belarus",
        "lat":53.9,
        "lon":27.57,
        "localtime":"2020-05-27 15:05"
      },
    current: {
      temp_c: '',
      wind_kph: '',
      humidity: '',
      condition: {
        text: '',
        icon: ''
      }
    },
    forecast: []
  }
};

const weather = (state = initState, action) => {
  switch (action.type) {
    case SetWeatherData: { return {...state, data: action.payload.data}}

    default: return state;
  }
};

export default weather;
