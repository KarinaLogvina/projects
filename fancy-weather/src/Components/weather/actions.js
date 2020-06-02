import getWeathers from '../../api/getWeathers';

export const SET_TEMP = 'SetTemp';
export const SET_APPARENT = 'SetApparent';
export const SET_SPEED = 'SetSpeed';
export const SET_MOIST = 'SetMoist';
export const SET_WEATHER_ICON = 'SetWeatherIcon';
export const SET_WEATHER_DATA = 'SetWeatherData';
export const SET_WEATHER_ERROR = 'SetWeatherError';
export const SET_LOCAL_TIME = 'SetLocalTime';

export const setTemp = (temp) => ({
  type: SET_TEMP,
  payload: { temp },
});

export const setApparent = (apparent) => ({
  type: SET_APPARENT,
  payload: { apparent },
});

export const setSpeed = (speed) => ({
  type: SET_SPEED,
  payload: { speed },
});

export const setMoist = (moist) => ({
  type: SET_MOIST,
  payload: { moist },
});

export const setWeatherIcon = (icon) => ({
  type: SET_WEATHER_ICON,
  payload: { icon },
});

export const setWeatherData = (data) => ({
  type: SET_WEATHER_DATA,
  payload: { data },
});

export const setWeatherError = (error) => ({
  type: SET_WEATHER_ERROR,
  payload: { error },
});

export const loadWeather = (query, location, lang) => async (dispatch) => {
  const { data, error } = await getWeathers(query, location, lang);
  if (error) {
    dispatch(setWeatherError(error));
  } else {
    dispatch(setWeatherData(data));
  }
};
