import builtHtmlElement from './templateHelper';
import { createKeys } from './createKeys';
import { languages } from './languages';

class Keyboard {
  constructor() {
    this.elements = {
      keyContainer: null,
      keys: [],
      textarea: null,
      langSwitch: null,
    };

    this.props = {
      isCapsLock: false,
      isShift: false,
      language: localStorage.getItem('lang') || 'en',
    };

    this.keyLayout = languages[this.props.language];
  }

  init() {
    this.elements.textarea = builtHtmlElement({
      tagName: 'textarea',
      classList: ['keyboard__field'],
      attrs: {
        rows: 8,
      },
    });

    this.elements.langSwitch = builtHtmlElement({
      tagName: 'p',
      classList: ['keyboard__switch'],
    });
    this.elements.langSwitch.innerText = 'For switch language use Shift + Alt. Created on Windows 10 OS.';

    this.elements.keyContainer = builtHtmlElement({
      tagName: 'section',
      classList: ['keyboard__keys'],
    });

    this.elements.keyContainer.appendChild(createKeys(this.keyLayout));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');

    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.elements.textarea);
    fragment.appendChild(this.elements.langSwitch);
    fragment.appendChild(this.elements.keyContainer);

    document.body.appendChild(fragment);

    document.addEventListener('keydown', (event) => this.bindWithKeyboard(event));
    document.addEventListener('keyup', (event) => this.removeActiveClass(event));

    this.elements.keyContainer.addEventListener('mousedown', (event) => this.clickKeyboard(event));
    this.elements.keyContainer.addEventListener('mouseup', (event) => this.removeActiveClass(event));
  }

  actionKeys(key, value, event) {
    switch (key) {
      case 'Delete':
      case 'Backspace':
        this.elements.textarea.value = this.elements.textarea.value
          .substring(0, this.elements.textarea.value.length - 1);
        break;
      case 'CapsLock':
        this.toggleCapsLock();
        break;
      case 'ShiftLeft':
        this.props.isShift = true;
        this.toggleCapsLock();
        break;
      case 'Enter':
        this.elements.textarea.value += '\n';
        break;
      case 'Space':
        event.preventDefault();
        this.elements.textarea.value += ' ';
        break;
      case 'Tab':
        event.preventDefault();
        this.elements.textarea.value += '\t';
        break;
      case 'Lang':
        this.toggleLanguage();
        break;
      case 'ControlLeft':
      case 'AltLeft':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        break;
      default:
        this.elements.textarea.value += this.props.isCapsLock
          ? value.toUpperCase()
          : value.toLowerCase();
        break;
    }
  }

  clickKeyboard(event) {
    Object.entries(this.keyLayout).forEach(([key, value]) => {
      if (event.target.textContent.toLowerCase() === value.toLowerCase()) {
        this.actionKeys(key, value, event);
      }
    });

    this.elements.keyContainer.removeEventListener('mousedown', (e) => this.clickKeyboard(e));
  }

  bindWithKeyboard(event) {
    this.elements.textarea.blur();
    const { keys } = this.elements;

    if (event.altKey && event.shiftKey) {
      this.toggleLanguage();
    }

    Object.entries(this.keyLayout).forEach(([key, value]) => {
      if (event.code === key) {
        keys.forEach((item) => {
          if (item.textContent.toLowerCase() === value.toLowerCase()) {
            item.classList.add('keyboard__key--active');
          }
        });

        this.actionKeys(key, value, event);
      }
    });

    this.elements.keyContainer.removeEventListener('keydown', (e) => this.bindWithKeyboard(e));
  }

  removeActiveClass(event) {
    const { keys } = this.elements;

    keys.forEach((item) => {
      item.classList.remove('keyboard__key--active');
    });

    if (event.target.textContent === 'Shift') {
      this.toggleCapsLock();
      this.props.isShift = false;
    }

    if (event.code === 'ShiftLeft') {
      this.toggleCapsLock();
      this.props.isShift = false;
    }
    this.elements.keyContainer.removeEventListener('keyup', (e) => this.removeActiveClass(e));
    this.elements.keyContainer.removeEventListener('mouseup', (e) => this.removeActiveClass(e));
  }

  toggleCapsLock() {
    const { keys } = this.elements;
    this.props.isCapsLock = !this.props.isCapsLock;

    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].childElementCount === 0) {
        keys[i].textContent = this.props.isCapsLock
          ? keys[i].textContent.toUpperCase()
          : keys[i].textContent.toLowerCase();
      } else if (keys[i].textContent === 'CapsLock' && !this.props.isShift) {
        keys[i].classList.toggle('keyboard__capslock--active', this.props.isCapsLock);
      }
    }
  }

  toggleLanguage() {
    this.props.language = this.props.language === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', this.props.language);
    this.keyLayout = languages[this.props.language];

    this.elements.keyContainer.innerHTML = '';
    this.elements.keyContainer.appendChild(createKeys(this.keyLayout));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');
  }
}

export default Keyboard;
