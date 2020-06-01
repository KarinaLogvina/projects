import { SetGeoLoc, GeoLocError, SetIp } from './action';

const initState = {
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
    case SetGeoLoc: { return { ...state, data: action.payload.data }; }
    case GeoLocError: { return { ...state, data: action.payload.error }; }
    case SetIp: {
      const { loc } = action.payload.ipData;
      const [latitude, longitude] = loc.split(',');
      return { ...state, ipData: { latitude, longitude } }; }
    default: return state;
  }
};

export default location;
