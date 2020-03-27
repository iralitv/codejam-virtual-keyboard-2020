import { builtHtmlElement } from "./templateHelper";

export const Keyboard = {
  elements: {
    keyContainer: null,
    keys: [],
    textarea: null,
  },

  eventHandlers: {
    oninput: null,
  },

  props: {
    capsLock: false,
    language: 'en',
  },

  init() {
    this.elements.textarea = builtHtmlElement({
      tagName: 'textarea',
      classList: ['keyboard__field'],
    });

    this.elements.keyContainer = builtHtmlElement({
      tagName: 'section',
      classList: ['keyboard__keys'],
    });

    this.elements.keyContainer.appendChild(this.createKeys(this.props.language));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');

    document.body.appendChild(this.elements.textarea);
    document.body.appendChild(this.elements.keyContainer);
  },

  createKeys(language) {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      'en': [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "language", "space"
      ],
      'ru': [
        "0", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "z", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "language", "space"
      ],
    };

    keyLayout[language].forEach(key => {
      const keyElement = builtHtmlElement({
        tagName: 'button',
        classList: ['keyboard__key'],
        attrs: {
          'type': 'button',
        },
      });

      const insertLineBreak = ["backspace", "p", "enter", "?"].includes(key);

      switch(key) {
        case 'backspace':
          keyElement.innerHTML = '<span>BACKTOtheFUTURE</span>';
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);
          });
          break;
        case 'caps':
          keyElement.innerHTML = '<span>CAPS</span>';
          keyElement.addEventListener('mousedown', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('keyboard__capslock--active', this.props.capsLock);
          });
          break;
        case 'enter':
          keyElement.innerHTML = '<span>Enter</span>';
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += '\n';
          });
          break;
        case 'space':
          keyElement.innerHTML = '<span>Space</span>';
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += ' ';
          });
          break;
        case 'language':
          keyElement.innerHTML = '<span>language</span>';
          keyElement.addEventListener('mousedown', () => {
            this.toggleLanguage();
          });
          break;
        default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += this.props.capsLock ? key.toUpperCase() : key.toLowerCase();
          });
          break;
      }

      fragment.appendChild(keyElement);
      if(insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  toggleCapsLock() {
    this.props.capsLock = !this.props.capsLock;

    for(const key of this.elements.keys) {
      if(key.childElementCount === 0) {
        key.textContent = this.props.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  toggleLanguage() {
    this.props.language = this.props.language === 'en' ? 'ru' : 'en';
    this.elements.keyContainer.innerHTML = '';
    this.elements.keyContainer.appendChild(this.createKeys(this.props.language));
  }
}