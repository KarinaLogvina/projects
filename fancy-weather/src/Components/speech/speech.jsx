import React from 'react';
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import getCurrentWeatherSpeech from './seloctors';
import {useSelector, useDispatch} from 'react-redux';
import {getLang, getVolume} from '../controlBlock/selectors';
import voiceCmdHandler from './helper';

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
  const volume = useSelector (getVolume);
  const dispatch = useDispatch ();
  const speakFixed = () =>
    speak ({text, voice, volume, lang: langToLocale (lang)});
  const {listen, listening, stop} = useSpeechRecognition ({
    onResult: voiceCmdHandler (dispatch, speakFixed),
  });

  return (
    <div className="control-box_speak-button">
      <button
        onClick={
          !listening
            ? () => listen ({interimResults: false, continuous: false})
            : () => stop ()
        }
        type="button"
        className={
          listening
            ? 'control-box_speak-button__micro select'
            : 'control-box_speak-button__micro'
        }
      >
        <img
          src="https://image.flaticon.com/icons/svg/875/875581.svg"
          alt="microphone"
          className="control-box_speak-button__micro__icon"
        />
      </button>
      {supported &&
        <div>
          {!speaking &&
            <button
              className="control-box_speak-button__play"
              onClick={() => speak ({text, voice, rate: 0.8})}
            >
              <img
                className="control-box_spak-button__play__icon"
                src="https://image.flaticon.com/icons/svg/832/832642.svg"
                alt=""
              />
            </button>}
          {speaking &&
            <button
              className="control-box_speak-button__play"
              onClick={() => cancel ()}
            >
              <img
                className="control-box_speak-button__play__icon"
                src="https://image.flaticon.com/icons/svg/871/871552.svg"
                alt=""
              />
            </button>}
        </div>}
    </div>
  );
}
