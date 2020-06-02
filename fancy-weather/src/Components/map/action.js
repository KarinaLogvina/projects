import getIPLocation from '../../api/getLocate ';
import { positionToGeoLocData } from './helper';

export const SET_IP = 'SetIp';
export const SET_IP_ERROR = 'SetIpError';
export const SET_GEO_LOCATION = 'SetGeoLoc';
export const GEO_LOCATION_ERROR = 'GeoLocError';

export const setIp = (ipData) => ({
  type: SET_IP,
  payload: { ipData },
});

export const setIpError = (error) => ({
  type: SET_IP_ERROR,
  payload: { error },
});

export const setGeoLoc = (data) => ({
  type: SET_GEO_LOCATION,
  payload: { data },
});

export const geoLocError = (error) => ({
  type: GEO_LOCATION_ERROR,
  payload: { error },
});

export const loadIP = () => async (dispatch) => {
  const data = await getIPLocation();
  dispatch(setIp(data));
};

export const askGeoLoc = () => (dispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        dispatch(setGeoLoc(positionToGeoLocData(pos)));
      },
      (error) => {
        dispatch(geoLocError(error));
      },
    );
  }
};
