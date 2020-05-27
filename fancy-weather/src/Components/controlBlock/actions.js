export const SetLanguage = 'SetLanguage';
export const SetUnit = 'SetUnit';
export const SetCity = 'SetCity';
export const SetBg = 'SetBg';
export const SetSearchQuery = 'SetSearchQuery';

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

export const setSearchQuery = (query) => ({
  type: SetSearchQuery,
  payload: { query }
})