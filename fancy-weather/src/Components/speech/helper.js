import { setSearchQuery, volumeUp, volumeDown } from '../controlBlock/actions';
import { loadWeather } from '../weather/actions';

const voiceCmdHandler = (dispatch, speak) => (cmd) => {
  switch (cmd.toLowerCase()) {
    case 'weather':
    case 'погода':
    case 'forecast':
      speak();
      break;
    case 'громче':
    case 'louder':
      dispatch(volumeUp());
      break;
    case 'тише':
    case 'quieter':
      dispatch(volumeDown());
      break;
    default:
      dispatch(setSearchQuery(cmd));
      dispatch(loadWeather(cmd));
      break;
  }
};

export default voiceCmdHandler;
