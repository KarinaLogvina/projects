import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import getCurrentWeatherSpeech from './seloctors';
import {useSelector} from 'react-redux';
import {getLang} from '../controlBlock/selectors';

const langToLocale = lang => {
  switch (lang) {
    case 'ru':
      return 'ru-RU';
    default:
      return 'en-US';
  }
};

export default function Speech () {
  const {speak, cancel, speaking, supported, voices} = useSpeechSynthesis ();
  const text = useSelector (getCurrentWeatherSpeech);
  const lang = useSelector (getLang);
  const filteredVoices = voices.filter (v => v.lang === langToLocale (lang));
  const voice = filteredVoices[0] || null;

  return (
    <div>
      {supported &&
        <div>
          {!speaking &&
            <button
              className="control-box_options-button__play"
              onClick={() => speak ({text, voice, rate: 0.8})}
            >
              <img
                className="control-box_options-button__play__icon"
                src="https://image.flaticon.com/icons/svg/832/832642.svg"
                alt=""
              />
            </button>}
          {speaking &&
            <button
              className="control-box_options-button__play"
              onClick={() => cancel ()}
            >
              <img
                className="control-box_options-button__play__icon"
                src="https://image.flaticon.com/icons/svg/871/871552.svg"
                alt=""
              />
            </button>}
        </div>}
    </div>
  );
}
