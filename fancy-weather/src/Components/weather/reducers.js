import { SetTemp, SetApparent, SetSpeed, SetMoist, SetWeatherIcon } from "./actions";


const initState = {
  temp: 0,
  apparent: 0,
  speed: 5,
  moist: 20,
  icon: ''
};

const controls = (state = initState, action) => {
  switch (action.type) {
    case SetTemp: { return { ...state, temp: action.payload.temp }; }
    case SetApparent: { return { ...state, apparent: action.payload.apparent }; }
    case SetSpeed: { return { ...state, speed: action.payload.speed }; }
    case SetMoist: { return { ...state, moist: action.payload.moist }; }
    case SetWeatherIcon: { return { ...state, icon: action.payload.icon }; }

    default: return state;
  }
};

export default controls;
