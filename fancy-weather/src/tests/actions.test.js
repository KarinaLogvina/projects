/* eslint-disable no-undef */
import * as controlActions from '../Components/controlBlock/actions';
import * as appActions from '../Components/app/action';
import * as mapActions from '../Components/map/action';

describe('Control actions', () => {
  it('should create an action to set a language', () => {
    const lang = 'ru';
    const expectedAction = {
      type: controlActions.SET_LANGUAGE,
      payload: { lang },
    };
    expect(controlActions.setLanguage(lang)).toEqual(expectedAction);
  });

  it('should create an action to set a unit', () => {
    const unit = 'F';
    const expectedAction = {
      type: controlActions.SET_UNIT,
      payload: { unit },
    };
    expect(controlActions.setUnit(unit)).toEqual(expectedAction);
  });

  it('should create an action to set a search query', () => {
    const query = 'Minsk';
    const expectedAction = {
      type: controlActions.SET_SEARCH_QUERY,
      payload: { query },
    };
    expect(controlActions.setSearchQuery(query)).toEqual(expectedAction);
  });

  it('should create an action to set a city', () => {
    const city = 'Minsk';
    const expectedAction = {
      type: controlActions.SET_CITY,
      payload: { city },
    };
    expect(controlActions.setCity(city)).toEqual(expectedAction);
  });
});

describe('App actions', () => {
  it('should create an action to set a background', () => {
    const bg = 'fsaf';
    const expectedAction = {
      type: appActions.SET_BG,
      payload: { bgUrl: bg },
    };
    expect(appActions.setBg(bg)).toEqual(expectedAction);
  });
});

describe('Map actions', () => {
  it('should create an action to set an ip', () => {
    const ipData = '12.542.214';
    const expectedAction = {
      type: mapActions.SET_IP,
      payload: { ipData },
    };
    expect(mapActions.setIp(ipData)).toEqual(expectedAction);
  });

  it('should create an action to set an ipError', () => {
    const error = 'not found';
    const expectedAction = {
      type: mapActions.SET_IP_ERROR,
      payload: { error },
    };
    expect(mapActions.setIpError(error)).toEqual(expectedAction);
  });

  it('should create an action to set a geolocation', () => {
    const data = 'Mogilev, Belarus';
    const expectedAction = {
      type: mapActions.SET_GEO_LOCATION,
      payload: { data },
    };
    expect(mapActions.setGeoLoc(data)).toEqual(expectedAction);
  });

  it('should create an action to set a geolocation error', () => {
    const error = 'Geolocation not gound';
    const expectedAction = {
      type: mapActions.GEO_LOCATION_ERROR,
      payload: { error },
    };
    expect(mapActions.geoLocError(error)).toEqual(expectedAction);
  });
});
