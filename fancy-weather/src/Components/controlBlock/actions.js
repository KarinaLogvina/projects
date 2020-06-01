import getImages from '../../api/getImages';
import { setBg } from '../app/action';

export const SetLanguage = 'SetLanguage';
export const SetUnit = 'SetUnit';
export const SetCity = 'SetCity';
export const SetSearchQuery = 'SetSearchQuery';
export const FetchNewBg = 'FetchNewBg';

export const setLanguage = (lang) => ({
  type: SetLanguage,
  payload: { lang },
});

export const setUnit = (unit) => ({
  type: SetUnit,
  payload: { unit },
});

export const setCity = (city) => ({
  type: SetCity,
  payload: { city },
});

export const setSearchQuery = (query) => ({
  type: SetSearchQuery,
  payload: { query },
});

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
