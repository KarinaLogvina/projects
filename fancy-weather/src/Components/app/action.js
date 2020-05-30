export const SetBg = 'SetBg';

export const setBg = (bgUrl) => ({
  type: SetBg,
  payload: { bgUrl }
});
