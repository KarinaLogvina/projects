import { SET_GEO_LOCATION, GEO_LOCATION_ERROR, SET_IP } from './action';

export const initState = {
  data: {
    latitude: '',
    longitude: '',
  },
  ipData: {
    latitude: '',
    longitude: '',
  },
};

const location = (state = initState, action) => {
  switch (action.type) {
    case SET_GEO_LOCATION: { return { ...state, data: action.payload.data }; }
    case GEO_LOCATION_ERROR: { return { ...state, data: action.payload.error }; }
    case SET_IP: {
      const { loc } = action.payload.ipData;
      const [latitude, longitude] = loc.split(',');
      return { ...state, ipData: { latitude, longitude } }; }
    default: return state;
  }
};

export default location;
