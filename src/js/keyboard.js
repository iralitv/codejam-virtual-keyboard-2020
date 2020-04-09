import builtHtmlElement from './templateHelper';
import { createKeys } from './createKeys';

class Keyboard {
  constructor() {
    this.elements = {
      keyContainer: null,
      keys: [],
      textarea: null,
      langSwitch: null,
    };

    this.props = {
      capsLock: false,
      language: localStorage.getItem('lang') || 'en',
    };
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
    this.elements.langSwitch.innerText = 'For switch language use Shift + Alt';

    this.elements.keyContainer = builtHtmlElement({
      tagName: 'section',
      classList: ['keyboard__keys'],
    });

    this.elements.keyContainer.appendChild(createKeys(this.props.language));
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

  actionKeys(key, event) {
    switch (key.textContent) {
      case 'Delete':
      case 'Backspace':
        this.elements.textarea.value = this.elements.textarea.value
          .substring(0, this.elements.textarea.value.length - 1);
        break;
      case 'CapsLock':
        this.toggleCapsLock();
        key.classList.toggle('keyboard__capslock--active', this.props.capsLock);
        break;
      case 'Shift':
        this.toggleCapsLock();
        break;
      case 'Enter':
        this.elements.textarea.value += '\n';
        break;
      case ' ':
        this.elements.textarea.value += ' ';
        break;
      case 'Tab':
        event.preventDefault();
        this.elements.textarea.value += '\t';
        break;
      case 'lang':
        this.toggleLanguage();
        break;
      case 'Control':
      case 'Alt':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowDown':
        break;
      default:
        this.elements.textarea.value += key.textContent;
        break;
    }
  }

  bindWithKeyboard(event) {
    const { keys } = this.elements;

    for (let i = 0; i < keys.length; i += 1) {
      if (event.key === keys[i].textContent) {
        keys[i].classList.add('keyboard__key--active');

        if (event.altKey && event.shiftKey) {
          this.toggleLanguage();
        }

        this.actionKeys(keys[i], event);
        break;
      }
    }

    this.elements.keyContainer.removeEventListener('keydown', (e) => this.bindWithKeyboard(e));
  }

  clickKeyboard(event) {
    const { keys } = this.elements;

    for (let i = 0; i < keys.length; i += 1) {
      if (event.target.textContent === keys[i].textContent) {
        this.actionKeys(keys[i], event);
        break;
      }
    }

    this.elements.keyContainer.removeEventListener('mousedown', (e) => this.clickKeyboard(e));
  }

  removeActiveClass(event) {
    const { keys } = this.elements;

    keys.forEach((item) => {
      if (event.key === item.textContent) {
        item.classList.remove('keyboard__key--active');
        if (event.key === 'Shift') {
          this.toggleCapsLock();
        }

        this.elements.keyContainer.removeEventListener('keyup', (e) => this.removeActiveClass(e));
      } else if (event.target.textContent === item.textContent) {
        if (event.target.textContent === 'Shift') {
          this.toggleCapsLock();
        }

        this.elements.keyContainer.removeEventListener('mouseup', (e) => this.removeActiveClass(e));
      }
    });
  }

  toggleCapsLock() {
    this.props.capsLock = !this.props.capsLock;

    this.elements.keys.forEach((key) => {
      const innerKey = key;

      if (innerKey.childElementCount === 0) {
        innerKey.textContent = this.props.capsLock
          ? innerKey.textContent.toUpperCase()
          : innerKey.textContent.toLowerCase();
      }
    });
  }

  toggleLanguage() {
    this.props.language = this.props.language === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', this.props.language);

    this.elements.keyContainer.innerHTML = '';
    this.elements.keyContainer.appendChild(createKeys(this.props.language));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');
  }
}

export default Keyboard;
