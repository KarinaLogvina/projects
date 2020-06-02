import getImages from '../../api/getImages';
import { setBg } from '../app/action';

export const SET_LANGUAGE = 'SetLanguage';
export const SET_UNIT = 'SetUnit';
export const SET_CITY = 'SetCity';
export const SET_SEARCH_QUERY = 'SetSearchQuery';
export const FETCH_NEW_BACKGROUND = 'FetchNewBg';
export const VOLUME_UP = 'VolumeUp';
export const VOLUME_DOWN = 'VolumeDown';

export const setLanguage = (lang) => ({
  type: SET_LANGUAGE,
  payload: { lang },
});

export const setUnit = (unit) => ({
  type: SET_UNIT,
  payload: { unit },
});

export const setCity = (city) => ({
  type: SET_CITY,
  payload: { city },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: { query },
});

export const volumeUp = () => ({ type: VOLUME_UP });
export const volumeDown = () => ({ type: VOLUME_DOWN });

export const fetchNewBg = (dayTime, season) => (dispatch) => {
  getImages(dayTime, season)
    .then(
      (data) => {
        const newImg = new Image();
        newImg.src = data;
        newImg.addEventListener('load', () => dispatch(setBg(data)), { once: true });
      },
    );
};
