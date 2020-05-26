export const SetLanguage = 'SetLanguage';
export const SetUnit = 'SetUnit';
export const SetCity = 'SetCity';
export const SetBg = 'SetBg';

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

export const setBg = () => ({
  type: SetBg,
});
