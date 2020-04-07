const keys = [
  [
    {
      en: { default: '`', shift: '~' }, ru: { low: 'ё', up: 'Ё' }, class: 'button', id: 'Backquote',
    },
    {
      en: { default: '1', shift: '!' }, ru: { default: '1', shift: '!' }, class: 'button', id: 'Digit1',
    },
    {
      en: { default: '2', shift: '@' }, ru: { default: '2', shift: '"' }, class: 'button', id: 'Digit2',
    },
    {
      en: { default: '3', shift: '#' }, ru: { default: '3', shift: '№' }, class: 'button', id: 'Digit3',
    },
    {
      en: { default: '4', shift: '$' }, ru: { default: '4', shift: ';' }, class: 'button', id: 'Digit4',
    },
    {
      en: { default: '5', shift: '%' }, ru: { default: '5', shift: '%' }, class: 'button', id: 'Digit5',
    },
    {
      en: { default: '6', shift: '^' }, ru: { default: '6', shift: ':' }, class: 'button', id: 'Digit6',
    },
    {
      en: { default: '7', shift: '&' }, ru: { default: '7', shift: '?' }, class: 'button', id: 'Digit7',
    },
    {
      en: { default: '8', shift: '*' }, ru: { default: '8', shift: '*' }, class: 'button', id: 'Digit8',
    },
    {
      en: { default: '9', shift: '(' }, ru: { default: '9', shift: '(' }, class: 'button', id: 'Digit9',
    },
    {
      en: { default: '0', shift: ')' }, ru: { default: '0', shift: ')' }, class: 'button', id: 'Digit0',
    },
    {
      en: { default: '-', shift: '_' }, ru: { default: '-', shift: '_' }, class: 'button', id: 'Minus',
    },
    {
      en: { default: '=', shift: '+' }, ru: { default: '=', shift: '+' }, class: 'button', id: 'Equal',
    },
    {
      en: { low: 'Backspace', up: 'Backspace' }, ru: { low: 'Backspace', up: 'Backspace' }, class: 'button backspace', id: 'Backspace',
    },
  ],
  [
    {
      en: { low: 'Tab', up: 'Tab' }, ru: { low: 'Tab', up: 'Tab' }, class: 'button tab', id: 'Tab',
    },
    {
      en: { low: 'q', up: 'Q' }, ru: { low: 'й', up: 'Й' }, class: 'button', id: 'KeyQ',
    },
    {
      en: { low: 'w', up: 'W' }, ru: { low: 'ц', up: 'Ц' }, class: 'button', id: 'KeyW',
    },
    {
      en: { low: 'e', up: 'E' }, ru: { low: 'у', up: 'У' }, class: 'button', id: 'KeyE',
    },
    {
      en: { low: 'r', up: 'R' }, ru: { low: 'к', up: 'К' }, class: 'button', id: 'KeyR',
    },
    {
      en: { low: 't', up: 'T' }, ru: { low: 'е', up: 'Е' }, class: 'button', id: 'KeyT',
    },
    {
      en: { low: 'y', up: 'Y' }, ru: { low: 'н', up: 'Н' }, class: 'button', id: 'KeyY',
    },
    {
      en: { low: 'u', up: 'U' }, ru: { low: 'г', up: 'Г' }, class: 'button', id: 'KeyU',
    },
    {
      en: { low: 'i', up: 'I' }, ru: { low: 'ш', up: 'Ш' }, class: 'button', id: 'KeyI',
    },
    {
      en: { low: 'o', up: 'O' }, ru: { low: 'щ', up: 'Щ' }, class: 'button', id: 'KeyO',
    },
    {
      en: { low: 'p', up: 'P' }, ru: { low: 'з', up: 'З' }, class: 'button', id: 'KeyP',
    },
    {
      en: { default: '[', shift: '{' }, ru: { low: 'х', up: 'Х' }, class: 'button', id: 'BracketLeft',
    },
    {
      en: { default: ']', shift: '}' }, ru: { low: 'ъ', up: 'Ъ' }, class: 'button', id: 'BracketRight',
    },
    {
      en: { default: '\\', shift: '|' }, ru: { default: '\\', shift: '/' }, class: 'button', id: 'Backslash',
    },
    {
      en: { low: 'Del', up: 'Del' }, ru: { low: 'Del', up: 'Backspace' }, class: 'button del', id: 'Delete',
    },
  ],
  [{
    en: { low: 'Caps lock', up: 'Caps lock' }, ru: { low: 'Caps lock', up: 'Caps lock' }, class: 'button caps', id: 'CapsLock',
  },
  {
    en: { low: 'a', up: 'A' }, ru: { low: 'ф', up: 'Ф' }, class: 'button', id: 'KeyA',
  },
  {
    en: { low: 's', up: 'S' }, ru: { low: 'ы', up: 'Ы' }, class: 'button', id: 'KeyS',
  },
  {
    en: { low: 'd', up: 'D' }, ru: { low: 'в', up: 'В' }, class: 'button', id: 'KeyD',
  },
  {
    en: { low: 'f', up: 'F' }, ru: { low: 'а', up: 'А' }, class: 'button', id: 'KeyF',
  },
  {
    en: { low: 'g', up: 'G' }, ru: { low: 'п', up: 'П' }, class: 'button', id: 'KeyG',
  },
  {
    en: { low: 'h', up: 'H' }, ru: { low: 'р', up: 'Р' }, class: 'button', id: 'KeyH',
  },
  {
    en: { low: 'j', up: 'J' }, ru: { low: 'о', up: 'О' }, class: 'button', id: 'KeyJ',
  },
  {
    en: { low: 'k', up: 'K' }, ru: { low: 'л', up: 'Л' }, class: 'button', id: 'KeyK',
  },
  {
    en: { low: 'l', up: 'L' }, ru: { low: 'д', up: 'Д' }, class: 'button', id: 'KeyL',
  },
  {
    en: { default: ';', shift: ':' }, ru: { low: 'ж', up: 'Ж' }, class: 'button', id: 'Semicolon',
  },
  {
    en: { default: '\'', shift: '"' }, ru: { low: 'э', up: 'Э' }, class: 'button', id: 'Quote',
  },
  {
    en: { low: 'Enter', up: 'Enter' }, ru: { low: 'Enter', up: 'Enter' }, class: 'button enter', id: 'Enter',
  }],

  [{
    en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'button shift', id: 'ShiftLeft',
  },
  {
    en: { low: 'z', up: 'Z' }, ru: { low: 'я', up: 'Я' }, class: 'button', id: 'KeyZ',
  },
  {
    en: { low: 'x', up: 'X' }, ru: { low: 'ч', up: 'Ч' }, class: 'button', id: 'KeyX',
  },
  {
    en: { low: 'c', up: 'C' }, ru: { low: 'с', up: 'С' }, class: 'button', id: 'KeyC',
  },
  {
    en: { low: 'v', up: 'V' }, ru: { low: 'м', up: 'М' }, class: 'button', id: 'KeyV',
  },
  {
    en: { low: 'b', up: 'B' }, ru: { low: 'и', up: 'И' }, class: 'button', id: 'KeyB',
  },
  {
    en: { low: 'n', up: 'N' }, ru: { low: 'т', up: 'Т' }, class: 'button', id: 'KeyN',
  },
  {
    en: { low: 'm', up: 'M' }, ru: { low: 'ь', up: 'Ь' }, class: 'button', id: 'KeyM',
  },
  {
    en: { default: ',', shift: '<' }, ru: { low: 'б', up: 'Б' }, class: 'button', id: 'Comma',
  },
  {
    en: { default: '.', shift: '>' }, ru: { low: 'ю', up: 'Ю' }, class: 'button', id: 'Period',
  },
  {
    en: { default: '/', shift: '?' }, ru: { low: '.', up: ',' }, class: 'button', id: 'Slash',
  },
  {
    en: { low: '↑', up: '↑' }, ru: { low: '↑', up: '↑' }, class: 'button', id: 'ArrowUp',
  },
  {
    en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'button', id: 'ShiftRight',
  }],

  [{
    en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'button ctrl', id: 'ControlLeft',
  },
  {
    en: { low: 'Win', up: 'Win' }, ru: { low: 'Win', up: 'Win' }, class: 'button win', id: 'MetaLeft',
  },
  {
    en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'button alt', id: 'AltLeft',
  },
  {
    en: { low: 'Space', up: 'Space' }, ru: { low: 'Space', up: 'Space' }, class: 'button space', id: 'Space',
  },
  {
    en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'button alt', id: 'AltRight',
  },
  {
    en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'button ctrl', id: 'ControlRight',
  },
  {
    en: { low: '←', up: '←' }, ru: { low: '←', up: '←' }, class: 'button', id: 'ArrowLeft',
  },
  {
    en: { low: '↓', up: '↓' }, ru: { low: '↓', up: '↓' }, class: 'button', id: 'ArrowDown',
  },
  {
    en: { low: '→', up: '→' }, ru: { low: '→', up: '→' }, class: 'button', id: 'ArrowRight',
  }],
];

const keyCodes = {
  Backquote: { en: { default: '`', shift: '~' }, ru: { default: 'ё', shift: 'Ё' } },
  Digit1: { en: { default: '1', shift: '!' }, ru: { default: '1', shift: '!' } },
  Digit2: { en: { default: '2', shift: '@' }, ru: { default: '2', shift: '"' } },
  Digit3: { en: { default: '3', shift: '#' }, ru: { default: '3', shift: '№' } },
  Digit4: { en: { default: '4', shift: '$' }, ru: { default: '4', shift: ';' } },
  Digit5: { en: { default: '5', shift: '%' }, ru: { default: '5', shift: '%' } },
  Digit6: { en: { default: '6', shift: '^' }, ru: { default: '6', shift: ':' } },
  Digit7: { en: { default: '7', shift: '&' }, ru: { default: '7', shift: '?' } },
  Digit8: { en: { default: '8', shift: '*' }, ru: { default: '8', shift: '*' } },
  Digit9: { en: { default: '9', shift: '(' }, ru: { default: '9', shift: '(' } },
  Digit0: { en: { default: '0', shift: ')' }, ru: { default: '0', shift: ')' } },
  Minus: { en: { default: '-', shift: '_' }, ru: { default: '-', shift: '_' } },
  Equal: { en: { default: '=', shift: '+' }, ru: { default: '=', shift: '+' } },
  Backspace: { sys: { default: 'Backspace' } },

  Tab: { en: { default: '    ', shift: '    ' }, ru: { default: '    ', shift: '    ' } },
  KeyQ: { en: { default: 'q', shift: 'Q' }, ru: { default: 'й', shift: 'Й' } },
  KeyW: { en: { default: 'w', shift: 'W' }, ru: { default: 'ц', shift: 'Ц' } },
  KeyE: { en: { default: 'e', shift: 'E' }, ru: { default: 'у', shift: 'У' } },
  KeyR: { en: { default: 'r', shift: 'R' }, ru: { default: 'к', shift: 'К' } },
  KeyT: { en: { default: 't', shift: 'T' }, ru: { default: 'е', shift: 'Е' } },
  KeyY: { en: { default: 'y', shift: 'Y' }, ru: { default: 'н', shift: 'Н' } },
  KeyU: { en: { default: 'u', shift: 'U' }, ru: { default: 'г', shift: 'Г' } },
  KeyI: { en: { default: 'i', shift: 'I' }, ru: { default: 'ш', shift: 'Ш' } },
  KeyO: { en: { default: 'o', shift: 'O' }, ru: { default: 'щ', shift: 'Щ' } },
  KeyP: { en: { default: 'p', shift: 'P' }, ru: { default: 'з', shift: 'З' } },
  BracketLeft: { en: { default: '[', shift: '{' }, ru: { default: 'х', shift: 'Х' } },
  BracketRight: { en: { default: ']', shift: '}' }, ru: { default: 'ъ', shift: 'Ъ' } },
  Backslash: { en: { default: '\\', shift: '|' }, ru: { default: '\\', shift: '/' } },
  Delete: { sys: { default: 'Delete' } },

  CapsLock: { sys: { default: 'CapsLock' } },
  KeyA: { en: { default: 'a', shift: 'A' }, ru: { default: 'ф', shift: 'Ф' } },
  KeyS: { en: { default: 's', shift: 'S' }, ru: { default: 'ы', shift: 'Ы' } },
  KeyD: { en: { default: 'd', shift: 'D' }, ru: { default: 'в', shift: 'В' } },
  KeyF: { en: { default: 'f', shift: 'F' }, ru: { default: 'а', shift: 'А' } },
  KeyG: { en: { default: 'g', shift: 'G' }, ru: { default: 'п', shift: 'П' } },
  KeyH: { en: { default: 'h', shift: 'H' }, ru: { default: 'р', shift: 'Р' } },
  KeyJ: { en: { default: 'j', shift: 'J' }, ru: { default: 'о', shift: 'О' } },
  KeyK: { en: { default: 'k', shift: 'K' }, ru: { default: 'л', shift: 'Л' } },
  KeyL: { en: { default: 'l', shift: 'L' }, ru: { default: 'д', shift: 'Д' } },
  Semicolon: { en: { default: ';', shift: ':' }, ru: { default: 'ж', shift: 'Ж' } },
  Quote: { en: { default: '\'', shift: '"' }, ru: { default: 'э', shift: 'Э' } },
  Enter: { sys: { default: 'Enter' } },

  ShiftLeft: { sys: { default: 'Shift' } },
  KeyZ: { en: { default: 'z', shift: 'Z' }, ru: { default: 'я', shift: 'Я' } },
  KeyX: { en: { default: 'x', shift: 'X' }, ru: { default: 'ч', shift: 'Ч' } },
  KeyC: { en: { default: 'c', shift: 'C' }, ru: { default: 'с', shift: 'С' } },
  KeyV: { en: { default: 'v', shift: 'V' }, ru: { default: 'м', shift: 'М' } },
  KeyB: { en: { default: 'b', shift: 'B' }, ru: { default: 'и', shift: 'И' } },
  KeyN: { en: { default: 'n', shift: 'N' }, ru: { default: 'т', shift: 'Т' } },
  KeyM: { en: { default: 'm', shift: 'M' }, ru: { default: 'ь', shift: 'Ь' } },
  Comma: { en: { default: ',', shift: '<' }, ru: { default: 'б', shift: 'Б' } },
  Period: { en: { default: '.', shift: '>' }, ru: { default: 'ю', shift: 'Ю' } },
  Slash: { en: { default: '/', shift: '?' }, ru: { default: '.', shift: ',' } },
  ShiftRight: { sys: { default: 'Shift' } },

  ControlLeft: { sys: { default: 'Ctrl' } },
  MetaLeft: { sys: { default: 'Meta' } },
  AltLeft: { sys: { default: 'Alt' } },
  Space: { en: { default: ' ', shift: ' ' }, ru: { default: ' ', shift: ' ' } },
  AltRight: { sys: { default: 'Alt' } },
  ControlRight: { sys: { default: 'Ctrl' } },

  ArrowUp: { sys: { default: '&uarr;' } },
  ArrowLeft: { sys: { default: '&larr;' } },
  ArrowDown: { sys: { default: '&darr;' } },
  ArrowRight: { sys: { default: '&rarr;' } },
};

const KEYS_WITH_DEFAULT_BEHAVIOR = [
  'Backspace',
  'Delete',
  'CapsLock',
  'Enter',
  'Space',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

let LANG = localStorage.getItem('keyboard_lang') || 'ru';

const keysStatus = {
  ctrl: false,
  shift: false,
};

function renderKeyboard() {
  const keysHTML = keys.map((row) => {
    const rowKeysHTML = row.map((key) => {
      return `
        <div class="${key.class}" id="${key.id}">
          ${key[LANG].default || key[LANG].low}
          <span>${key[LANG].shift || ''}</span>
        </div>
      `;
    }).join('');

    const rowHTML = `<div class="row">${rowKeysHTML}</div>`;

    return rowHTML;
  }).join('');

  return keysHTML;
}

function render() {
  const keysHTML = renderKeyboard();

  const blockHTML = `
    <textarea cols="40" rows="5" id="textarea"></textarea>
    <div class="keyboard" id="keyboard">
      ${keysHTML}
    </div>
  `;

  const container = document.createElement('div');
  container.classList.add('block');
  container.id = 'container';
  container.innerHTML = blockHTML;
  document.body.append(container);
}

function changeLanguage() {
  LANG = LANG === 'ru' ? 'en' : 'ru';
  localStorage.setItem('keyboard_lang', LANG);

  keysStatus.ctrl = false;
  keysStatus.shift = false;

  document.getElementById('keyboard').innerHTML = renderKeyboard();
}

window.onload = function () {
  render();

  const textArea = document.getElementById('textarea');

  document.addEventListener('keydown', function (event) {
    const key = event.code;
    const element = document.getElementById(event.code);

    if (element) {
      document.getElementById(key).classList.add('active');

      if (keyCodes[key].sys && keyCodes[key].sys.default === 'Ctrl') {
        keysStatus.ctrl = true;
      } else if (keyCodes[key].sys && keyCodes[key].sys.default === 'Shift') {
        keysStatus.shift = true;
      }

      if (keysStatus.ctrl && keysStatus.shift) {
        changeLanguage();
      }

      if (KEYS_WITH_DEFAULT_BEHAVIOR.includes(key)) {
        return;
      }

      if (keyCodes[key][LANG]) {
        textArea.value += keysStatus.shift
          ? keyCodes[key][LANG].shift
          : keyCodes[key][LANG].default;
      }

      event.preventDefault();
    }
  });

  document.addEventListener('keyup', function (event) {
    event.preventDefault();

    const key = event.code;
    const element = document.getElementById(event.code);

    if (element) {
      element.classList.remove('active');

      if (keyCodes[key].sys && keyCodes[key].sys.default === 'Ctrl') {
        keysStatus.ctrl = false;
      } else if (keyCodes[key].sys && keyCodes[key].sys.default === 'Shift') {
        keysStatus.shift = false;
      }
    }
  });

  const keyboard = document.getElementById('keyboard');

  keyboard.addEventListener('click', function (event) {
    event.preventDefault();

    const key = event.target.id;

    if (keyCodes[key]) {
      if (keyCodes[key][LANG]) {
        textArea.value += keysStatus.shift
          ? keyCodes[key][LANG].shift
          : keyCodes[key][LANG].default;

        return;
      }

      const down = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: key,
        code: key,
        keyCode: 8,
      });

      const up = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: key,
        code: key,
        keyCode: 8,
      });

      textArea.dispatchEvent(down);
      keyboard.dispatchEvent(up);
    }
  });

  textArea.onblur = function () {
    textArea.focus();
  };

  textArea.focus();
};
