import getLocation from '../../api/getLocate ';
import { positionToGeoLocData } from './helper';

export const SetIp = 'SetIp';
export const SetIpError = 'SetIpError';
export const SetGeoLoc = 'SetGeoLoc';
export const GeoLocError = 'GeoLocError';

export const setIp = (ip) => ({
  type: SetIp,
  payload: { ip },
});

export const setIpError = (error) => ({
  type: SetIpError,
  payload: { error },
});

export const setGeoLoc = (data) => ({
  type: SetGeoLoc,
  payload: { data },
});

export const geoLocError = (error) => ({
  type: GeoLocError,
  payload: { error },
});

export const loadIP = () => async (dispatch) => {
  const { ip, error } = await getLocation();
  if (error) {
    dispatch(setIpError(error));
  } else {
    dispatch(setIp(ip));
  }
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
