import React from 'react';
import {useSelector, useStore, useDispatch} from 'react-redux';
import {getLang} from './selectors';
import {setUnit} from './actions';

function ControlBox () {
  const lang = useSelector (getLang);
  const dispatch = useDispatch ();
  return (
    <div className="controlBox">
      <div className="optionsBox">
        <button>reload</button>
        <select name="language" id="lang">
          <option
            value="en"
            selected={lang === 'en'}
            onClick={() => dispatch (setLanguage ('en'))}
          >
            EN
          </option>
          <option
            value="ru"
            selected={lang === 'ru'}
            onClick={() => dispatch (setLanguage ('ru'))}
          >
            RU
          </option>
          <option
            value="be"
            selected={lang === 'be'}
            onClick={() => dispatch (setLanguage ('be'))}
          >
            BE
          </option>
        </select>
        <button
          onClick={() => dispatch (setUnit ('C'))}
          className="btn_unit__active"
        >
          °C
        </button>
        <button onClick={() => dispatch (setUnit ('F'))} className="btn_unit">
          F
        </button>
      </div>
      <div className="search">
        <input type="text" placeholder="Search city" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default ControlBox;
