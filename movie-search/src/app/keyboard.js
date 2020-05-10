const divContainer = document.createElement('div');
divContainer.className = 'key-wrapper unactive';
document.body.append(divContainer);

const createElement = (tag, name, base) => {
  const elem = document.createElement(tag);
  elem.className = name;
  base.append(elem);
  return elem;
};

const input = document.querySelector('.search-input');
const keyboard = createElement('div', 'keyboard', divContainer);
createElement('div', 'row one', keyboard);
createElement('div', 'row two', keyboard);
createElement('div', 'row three', keyboard);
createElement('div', 'row four', keyboard);
createElement('div', 'row five', keyboard);

const keyValueEn = [
  [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', 'Backspace']],
  [['Tab', 'Tab'], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '\\']],
  [['CapsLock', 'CapsLock'], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['`', '"'], ['Enter', 'Enter']],
  [['Shift', 'Shift'], ['\\', '|'], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['↑', '↑'], ['Shift', 'Shift']],
  [['Ctrl', 'Ctrl'], ['Lang', 'Lang'], ['Alt', 'Alt'], [' ', ' '], ['Alt', 'Alt'], ['Win', 'Win'], ['Ctrl', 'Ctrl'], ['←', '←'], ['↓', '↓'], ['→', '→']],
];

const keyValueRu = [
  [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', 'Backspace']],
  [['Tab', 'Tab'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '\\']],
  [['CapsLock', 'CapsLock'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['Enter', 'Enter']],
  [['Shift', 'Shift'], ['\\', '|'], ['я', 'Я'], ['ч', 'Ч'], ['c', 'C'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], ['↑', '↑'], ['Shift', 'Shift']],
  [['Ctrl', 'Ctrl'], ['Lang', 'Lang'], ['Alt', 'Alt'], [' ', ' '], ['Alt', 'Alt'], ['Win', 'Win'], ['Ctrl', 'Ctrl'], ['←', '←'], ['↓', '↓'], ['→', '→']],
];

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'OSRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const languargeSelection = {
  ru: keyValueRu,
  en: keyValueEn,
};

const rows = [...document.querySelectorAll('.row')];
const activeKeysSet = new Set();
const renderKeyboard = () => {
  document.querySelectorAll('.key').forEach((keyElement) => {
    keyElement.classList.remove('active');
  });
  activeKeysSet.forEach((id) => {
    document.getElementById(id).classList.add('active');
  });
};

const createKey = (lang, item) => {
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].innerHTML = '';
    lang[i].forEach((array, idx) => {
      const but = document.createElement('div');
      but.innerHTML = array[item];
      but.className = 'key';
      rows[i].append(but);
      but.id = keyCode[i][idx];
      if (but.id === 'ShiftLeft' || but.id === 'Tab' || but.id === 'CapsLock' || but.id === 'Enter' || but.id === 'Backspace') {
        but.classList.add('special');
      }
      if (but.id === 'Space') {
        but.classList.add('space');
      }
    });
  }
  renderKeyboard();
};

const switchLanguage = () => {
  if (localStorage.language === 'ru') {
    localStorage.language = 'en';
  } else {
    localStorage.language = 'ru';
  }
  createKey(languargeSelection[localStorage.language], 0);
};

const searchField = document.querySelector('.search-input');
const submitEvent = new CustomEvent('submit');
const printSymbol = (symbol) => {
  switch (symbol) {
    case 'Tab':
      input.value += '     ';
      searchField.focus();
      break;
    case 'Enter':
      searchField.dispatchEvent(submitEvent);
      document.querySelector('.key-wrapper').classList.add('unactive');
      searchField.focus();
      break;
    case 'CapsLock':
      input.value += symbol.toUpperCase();
      searchField.focus();
      break;
    case 'Backspace':
      input.value = input.value.slice(0, -1);
      searchField.focus();
      break;
    case '←':
      input
        .setSelectionRange(Math.max(0, input.selectionEnd - 1),
          Math.max(0, input.selectionEnd - 1));
      searchField.focus();
      break;
    case '→':
      input
        .setSelectionRange(Math.max(0, input.selectionEnd + 1),
          Math.max(0, input.selectionEnd + 1));
      searchField.focus();
      break;
    case 'Lang':
      switchLanguage();
      break;
    case 'Alt':
    case 'Ctrl':
    case 'Shift':
    case 'Win':
    case '↑':
    case '↓':
      break;
    default:
      input.setRangeText(symbol, input.selectionStart, input.selectionEnd, 'end');
      document.querySelector('.search-input').focus();
      break;
  }
};

if (localStorage.language === undefined) {
  localStorage.language = 'en';
}
createKey(languargeSelection[localStorage.language], 0);

let capsLockON = false;
let shiftON = false;
const toggleShift = (keyElement) => {
  const shiftId = keyElement.id;
  shiftON = !shiftON;
  if (!shiftON && !capsLockON) {
    createKey(languargeSelection[localStorage.language], 0);
  }
  if (capsLockON || shiftON) {
    createKey(languargeSelection[localStorage.language], 1);
  }
  if (capsLockON && shiftON) {
    createKey(languargeSelection[localStorage.language], 0);
  }
  if (shiftON) {
    activeKeysSet.add(shiftId);
  }
};

const toggleCapsLock = (keyElement) => {
  const capsLockId = keyElement.id;
  if (!capsLockON && !activeKeysSet.has(capsLockId)) {
    activeKeysSet.add(capsLockId);
    createKey(languargeSelection[localStorage.language], 1);
  }
  if (capsLockON && activeKeysSet.has(capsLockId)) {
    activeKeysSet.delete(capsLockId);
    createKey(languargeSelection[localStorage.language], 0);
  }
  capsLockON = !capsLockON;
  renderKeyboard();
};

const print = document.querySelector('.keyboard');
print.addEventListener('mousedown', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  if (event.target.id === 'Win') {
    switchLanguage();
  }
  if (event.target.id === 'CapsLock') {
    toggleCapsLock(event.target);
    input.value += '';
  } else {
    const letter = event.target.closest('div').innerHTML;
    activeKeysSet.add(event.target.closest('div').id);
    printSymbol(letter);
  }
  input.focus();
  renderKeyboard();
});

print.addEventListener('mouseup', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  if (event.target.id !== 'CapsLock') {
    activeKeysSet.delete(event.target.closest('div').id);
  }
  input.focus();
  renderKeyboard();
});


export { createKey, languargeSelection };
