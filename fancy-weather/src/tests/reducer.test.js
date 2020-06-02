/* eslint-disable no-undef */
import weatherReducer, { initState as weatherInitState } from '../Components/weather/reducers';
import mapReducer, { initState as mapInitState } from '../Components/map/reducers';
import controlReducer, { initState as controlInitState } from '../Components/controlBlock/reducers';
import appReducer, { initState as appInitState } from '../Components/app/reducer';


describe('Weather reducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(weatherInitState);
  });
});

describe('Map reducer', () => {
  it('should return the initial state', () => {
    expect(mapReducer(undefined, {})).toEqual(mapInitState);
  });
});

describe('Map reducer', () => {
  it('should return the initial state', () => {
    expect(controlReducer(undefined, {})).toEqual(controlInitState);
  });
});

describe('Map reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(appInitState);
  });
});
