import { SetGeoLoc, GeoLocError } from './action';

const initState = {
  data: {
    latitude: '',
    longitude: '',
  },
};

const location = (state = initState, action) => {
  switch (action.type) {
    case SetGeoLoc: { return { ...state, data: action.payload.data }; }
    case GeoLocError: { return { ...state, data: action.payload.error }; }
    default: return state;
  }
};

export default location;
