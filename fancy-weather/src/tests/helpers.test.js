/* eslint-disable no-undef */
import * as controlHelpers from '../Components/controlBlock/helper';
import * as mapHelpers from '../Components/map/helper';

describe('control helpers', () => {
  it('GetSeason returns correct season for mounth', () => {
    const testMonth = '5';
    expect(controlHelpers.getSeason(testMonth)).toEqual('spring');
  });

  it('GetSeason returns correct season for mounth', () => {
    const testMonth = '55';
    expect(controlHelpers.getSeason(testMonth)).toEqual('fall');
  });

  it('GetDayTime returns correct daytime for hour', () => {
    const testHour = 5;
    expect(controlHelpers.getDayTime(testHour)).toEqual('night');
  });

  it('Select returns className for unit button', () => {
    const currentUnit = 'F';
    const expectedUnit = 'F';
    expect(controlHelpers.select(currentUnit, expectedUnit)).toEqual('select');
  });

  it('Select returns className for unit button', () => {
    const currentUnit = 'C';
    const expectedUnit = 'F';
    expect(controlHelpers.select(currentUnit, expectedUnit)).toEqual('');
  });
});

describe('map helpers', () => {
  it('CoordToDMS returns DMS coordinates', () => {
    const lat = 53.4578;
    const dirs = ['N', 'S'];
    expect(mapHelpers.coordToDMS(lat, dirs)).toEqual('53° 27\' 28" N');
  });

  it('PositionToGeoLocData returns latitude and longitude', () => {
    const position = { coords: { latitude: 1, longitude: 1 } };
    const expected = { latitude: 1, longitude: 1 };
    expect(mapHelpers.positionToGeoLocData(position)).toEqual(expected);
  });
});
