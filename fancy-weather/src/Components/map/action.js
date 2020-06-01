import getIPLocation from '../../api/getLocate ';
import { positionToGeoLocData } from './helper';

export const SetIp = 'SetIp';
export const SetIpError = 'SetIpError';
export const SetGeoLoc = 'SetGeoLoc';
export const GeoLocError = 'GeoLocError';

export const setIp = (ipData) => ({
  type: SetIp,
  payload: { ipData },
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
