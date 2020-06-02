import getWeathers from '../../api/getWeathers';

export const SetTemp = 'SetTemp';
export const SetApparent = 'SetApparent';
export const SetSpeed = 'SetSpeed';
export const SetMoist = 'SetMoist';
export const SetWeatherIcon = 'SetWeatherIcon';
export const SetWeatherData = 'SetWeatherData';
export const SetWeatherError = 'SetWeatherError';
export const SetLocalTime = 'SetLocalTime';

export const setTemp = (temp) => ({
  type: SetTemp,
  payload: { temp },
});

export const setApparent = (apparent) => ({
  type: SetApparent,
  payload: { apparent },
});

export const setSpeed = (speed) => ({
  type: SetSpeed,
  payload: { speed },
});

export const setMoist = (moist) => ({
  type: SetMoist,
  payload: { moist },
});

export const setWeatherIcon = (icon) => ({
  type: SetWeatherIcon,
  payload: { icon },
});

export const setWeatherData = (data) => ({
  type: SetWeatherData,
  payload: { data },
});

export const setWeatherError = (error) => ({
  type: SetWeatherError,
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
