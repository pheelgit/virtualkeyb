const keyList = [{
  code: 'Backquote', keyEn: '`', keyEnShift: '~', keyRu: 'ё', keyRuShift: 'Ё',
},
{ code: 'Digit1', keyEn: '1', keyEnShift: '!' },
{
  code: 'Digit2', keyEn: '2', keyEnShift: '@', keyRuShift: '"',
},
{
  code: 'Digit3', keyEn: '3', keyEnShift: '#', keyRuShift: '№',
},
{
  code: 'Digit4', keyEn: '4', keyEnShift: '$', keyRuShift: ';',
},
{
  code: 'Digit5', keyEn: '5', keyEnShift: '%', keyRuShift: '%',
},
{
  code: 'Digit6', keyEn: '6', keyEnShift: '^', keyRuShift: ':',
},
{
  code: 'Digit7', keyEn: '7', keyEnShift: '&', keyRuShift: '?',
},
{ code: 'Digit8', keyEn: '8', keyEnShift: '*' },
{ code: 'Digit9', keyEn: '9', keyEnShift: '(' },
{ code: 'Digit0', keyEn: '0', keyEnShift: ')' },
{ code: 'Minus', keyEn: '-', keyEnShift: '_' },
{ code: 'Equal', keyEn: '=', keyEnShift: '+' },
{ code: 'Backspace', keyEn: '\u232B' },

{ code: 'Tab', keyEn: 'Tab' },
{ code: 'KeyQ', keyEn: 'q', keyRu: 'й' },
{ code: 'KeyW', keyEn: 'w', keyRu: 'ц' },
{ code: 'KeyE', keyEn: 'e', keyRu: 'у' },
{ code: 'KeyR', keyEn: 'r', keyRu: 'к' },
{ code: 'KeyT', keyEn: 't', keyRu: 'е' },
{ code: 'KeyY', keyEn: 'y', keyRu: 'н' },
{ code: 'KeyU', keyEn: 'u', keyRu: 'г' },
{ code: 'KeyI', keyEn: 'i', keyRu: 'ш' },
{ code: 'KeyO', keyEn: 'o', keyRu: 'щ' },
{ code: 'KeyP', keyEn: 'p', keyRu: 'у' },
{
  code: 'BracketLeft', keyEn: '[', keyEnShift: '{', keyRu: 'з', keyRuShift: 'З',
},
{
  code: 'BracketRight', keyEn: ']', keyEnShift: '}', keyRu: 'х', keyRuShift: 'Х',
},
{
  code: 'Backslash', keyEn: '\\', keyEnShift: '|', keyRu: 'ъ', keyRuShift: 'Ъ',
},
{ code: 'Delete', keyEn: 'Del' },

{ code: 'CapsLock', keyEn: 'CapsLock' },
{ code: 'KeyA', keyEn: 'a', keyRu: 'ф' },
{ code: 'KeyS', keyEn: 's', keyRu: 'ы' },
{ code: 'KeyD', keyEn: 'd', keyRu: 'в' },
{ code: 'KeyF', keyEn: 'f', keyRu: 'а' },
{ code: 'KeyG', keyEn: 'g', keyRu: 'п' },
{ code: 'KeyH', keyEn: 'h', keyRu: 'р' },
{ code: 'KeyJ', keyEn: 'j', keyRu: 'о' },
{ code: 'KeyK', keyEn: 'k', keyRu: 'л' },
{ code: 'KeyL', keyEn: 'l', keyRu: 'д' },
{
  code: 'Semicolon', keyEn: ';', keyEnShift: ':', keyRu: 'ж', keyRuShift: 'Ж',
},
{
  code: 'Quote', keyEn: "'", keyEnShift: '"', keyRu: 'э', keyRuShift: 'Э',
},
{ code: 'Enter', keyEn: 'Enter' },

{ code: 'ShiftLeft', keyEn: 'Shift' },
{ code: 'KeyZ', keyEn: 'z', keyRu: 'я' },
{ code: 'KeyX', keyEn: 'x', keyRu: 'ч' },
{ code: 'KeyC', keyEn: 'c', keyRu: 'с' },
{ code: 'KeyV', keyEn: 'v', keyRu: 'м' },
{ code: 'KeyB', keyEn: 'b', keyRu: 'и' },
{ code: 'KeyN', keyEn: 'n', keyRu: 'т' },
{ code: 'KeyM', keyEn: 'm', keyRu: 'ь' },
{
  code: 'Comma', keyEn: ',', keyEnShift: '<', keyRu: 'б', keyRuShift: 'Б',
},
{
  code: 'Period', keyEn: '.', keyEnShift: '>', keyRu: 'ю', keyRuShift: 'Ю',
},
{
  code: 'Slash', keyEn: '/', keyEnShift: '?', keyRu: '.', keyRuShift: ',',
},
{ code: 'ArrowUp', keyEn: '\u2191' },
{ code: 'ShiftRight', keyEn: 'Shift' },

{ code: 'ControlLeft', keyEn: 'Ctrl' },
{ code: 'MetaLeft', keyEn: '⊞' },
{ code: 'AltLeft', keyEn: 'Alt' },
{ code: 'Space', keyEn: 'space' },
{ code: 'AltRight', keyEn: 'Alt' },
{ code: 'ArrowLeft', keyEn: '\u2190' },
{ code: 'ArrowDown', keyEn: '\u2193' },
{ code: 'ArrowRight', keyEn: '\u2192' },
{ code: 'ControlRight', keyEn: 'Ctrl' },
];

const Keyboard = {
  elements: {
    textArea: null,
    mainKeyboard: null,
    keys: [],
    charKeys: [],
    shiftKeys: [],
  },

  properties: {
    value: '',
    capsLock: false,
    shift: false,
    lang: 'En',
    ctrl: false,
  },

  keyLayout: [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'br',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'br',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'br',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'br',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight', 'br',
  ],

  specialButtons: [
    'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'MetaRight',
  ],

  init() {
    this.properties.lang = (localStorage.getItem('Lang') || 'En');

    this.elements.textArea = document.createElement('textarea');
    this.elements.textArea.classList.add('use-keyboard-input');

    this.elements.mainKeyboard = document.createElement('div');
    this.elements.mainKeyboard.classList.add('keyboard');

    document.body.append(this.elements.textArea, this.elements.mainKeyboard);

    this.createKeys();
    this.onClick();
    this.onKeyDown();
    this.onKeyUp();

    this.elements.keys = this.elements.mainKeyboard.getElementsByClassName('keyboard__key');
    this.elements.charKeys = [...this.elements.keys]
      .filter(({ id }) => !this.specialButtons.includes(id));
    this.elements.shiftKeys = [...this.elements.keys].filter(({ id }) => {
      const shiftKeys = keyList.filter(({ keyEnShift }) => keyEnShift).map(({ code }) => code);
      return shiftKeys.includes(id);
    });

    this.drawKeys();

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('Lang', this.properties.lang);
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    this.keyLayout.forEach((key) => {
      if (key === 'br') {
        return fragment.appendChild(document.createElement('br'));
      }
      const keyInfo = keyList.find(({ code }) => code === key);

      const keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      keyElement.id = key;
      keyElement.innerHTML = keyInfo.keyEn;

      if (this.specialButtons.includes(key)) {
        keyElement.classList.add('keyboard__key--wide');
      }

      return fragment.appendChild(keyElement);
    });
    this.elements.mainKeyboard.appendChild(fragment);
  },

  onClick() {
    this.elements.mainKeyboard.addEventListener('click', (event) => {
      if ((event.target === this.elements.mainKeyboard)) {
        return;
      }

      const keyCode = event.target.id;

      const sStart = this.elements.textArea.selectionStart;
      const sEnd = this.elements.textArea.selectionEnd;

      switch (keyCode) {
        case ('Space'):
          this.elements.textArea.setRangeText(' ', sStart, sEnd, 'end');
          break;

        case ('Enter'):
          this.elements.textArea.setRangeText('\n', sStart, sEnd, 'end');
          break;

        case ('MetaLeft'):
          break;

        case ('Tab'):
          this.elements.textArea.setRangeText('  ', sStart, sEnd, 'end');
          break;

        case ('ShiftLeft'):
          this.toggleShift();
          break;

        case ('ShiftRight'):
          this.toggleShift();
          break;

        case ('CapsLock'):
          this.toggleCapsLock();
          break;

        case ('Backspace'):
          if (sStart === sEnd) {
            this.elements.textArea.value = this.elements.textArea.value.slice(0, sStart - 1)
               + this.elements.textArea.value.slice(sEnd);
            this.elements.textArea.setRangeText('', sStart - 1, sStart - 1, 'start');
          } else {
            this.elements.textArea.value = this.elements.textArea.value.slice(0, sStart)
               + this.elements.textArea.value.slice(sEnd);
            this.elements.textArea.setRangeText('', sStart, sStart, 'start');
          }
          break;

        case ('Delete'):
          this.elements.textArea.value = (sStart === sEnd)
            ? this.elements.textArea.value.slice(0, sStart)
                + this.elements.textArea.value.slice(sEnd + 1)
            : this.elements.textArea.value.slice(0, sStart)
                + this.elements.textArea.value.slice(sEnd);

          this.elements.textArea.setRangeText('', sStart, sStart, 'start');
          break;

        case ('ControlLeft'):
          this.properties.ctrl = !this.properties.ctrl;
          break;

        case ('ControlRight'):
          this.properties.ctrl = !this.properties.ctrl;
          break;

        case ('AltRight'):
          if (this.properties.ctrl) { this.changeLang(); }
          break;

        case ('AltLeft'):
          if (this.properties.ctrl) { this.changeLang(); }
          break;

        default:
          this.elements.textArea.setRangeText(event.target.textContent, sStart, sEnd, 'end');
      }
    });
  },

  onKeyDown() {
    window.addEventListener('keydown', (key) => {
      key.preventDefault();

      if ((key.code.includes('Shift'))
          || (key.code.includes('Control'))
          || (key.code === 'CapsLock')) {
        if (key.repeat === true) return;
      }

      if (key.code.includes('Shift')) {
        this.properties.shift = false;
      }

      const clickKey = [...this.elements.keys].find(({ id }) => id === key.code);

      if (clickKey) {
        clickKey.click();
        clickKey.classList.add('pushed');
      }
    });
  },

  onKeyUp() {
    window.addEventListener('keyup', (key) => {
      key.preventDefault();

      const clickKey = [...this.elements.keys].find(({ id }) => id === key.code);

      if (key.code.includes('Shift')
           || key.code.includes('Control')) {
        if (clickKey) {
          clickKey.click();
        }
      }

      if (clickKey) {
        clickKey.classList.remove('pushed');
      }
    });
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    const keyCapsLock = document.getElementById('CapsLock');
    keyCapsLock.classList.toggle('caps-active', this.properties.capsLock);

    if (this.properties.capsLock) {
      this.charsUp();
    } else {
      this.charsDown();
    }
  },

  toggleShift() {
    this.properties.shift = !this.properties.shift;
    if (this.properties.shift) {
      this.charsUp();
    } else {
      this.charsDown();
    }
    this.elements.shiftKeys.forEach((key) => {
      const keyInfo = keyList.find(({ code }) => code === key.id);
      switch (this.properties.lang) {
        case ('En'):
          key.textContent = (this.properties.shift) ? keyInfo.keyEnShift : keyInfo.keyEn;
          break;

        case ('Ru'):
          key.textContent = (this.properties.shift) ? (keyInfo.keyRuShift
            || keyInfo.keyEnShift) : (keyInfo.keyRu || keyInfo.keyEn);
          break;
        default:
          break;
      }
    });
  },

  charsUp() {
    this.elements.charKeys.map((key) => key.textContent = key.textContent.toUpperCase());
  },

  charsDown() {
    if (this.properties.capsLock || this.properties.shift) {
      return;
    }
    this.elements.charKeys.map((key) => key.textContent = key.textContent.toLowerCase());
  },

  changeLang() {
    this.properties.lang = (this.properties.lang === 'En') ? 'Ru' : 'En';
    this.drawKeys();
  },

  drawKeys() {
    [...this.elements.keys].forEach((key) => {
      const keyInfo = keyList.find(({ code }) => code === key.id);
      key.textContent = (this.properties.lang === 'En')
        ? (keyInfo.keyEn || keyInfo.keyRu)
        : (keyInfo.keyRu || keyInfo.keyEn);
    });
  },

};

window.addEventListener('DOMContentLoaded', () => Keyboard.init());
