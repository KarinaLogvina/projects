const createEvent = (type, payload) => {
  const event = new CustomEvent(type);
  event.payload = payload;
  return event;
};

const events = {
  toggle: 'toggle',
  show: 'show',
  hide: 'hide',
  translarion: 'translation',
  click: 'click',
  submit: 'sumbit',
};

export { createEvent, events };
