import { builtHtmlElement } from "./templateHelper";

export class Keyboard {
  constructor() {
    this.elements = {
      keyContainer: null,
        keys: [],
        textarea: null,
    };

    this.props = {
      capsLock: false,
      language: 'en',
    };
  }


  init() {
    this.elements.textarea = builtHtmlElement({
      tagName: 'textarea',
      classList: ['keyboard__field'],
      attrs: {
        'rows': 10,
      }
    });

    this.elements.keyContainer = builtHtmlElement({
      tagName: 'section',
      classList: ['keyboard__keys'],
    });

    this.elements.keyContainer.appendChild(this.createKeys(this.props.language));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');

    document.body.appendChild(this.elements.textarea);
    document.body.appendChild(this.elements.keyContainer);

    document.addEventListener('keydown', () => this.bindWithPhysicalKeyboard(event));
    document.addEventListener('keyup', () => this.removeActiveClass(event));
  }

  createKeys(language) {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      'en': [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace",
      'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", 'Delete',
      "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter",
      'Shift', "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",'ShiftLeft',
      'Control', "language", 'Alt', "space", 'Alt', 'Control',
      ],
      'ru': [
        "0", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace",
        'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",'Delete',
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter",
        'Shift', "z", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", 'ShiftLeft',
        'Control', "language", 'Alt', "space", 'Alt', 'Control',
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

      const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftLeft"].includes(key);

      switch(key) {
        case 'Backspace':
          keyElement.innerHTML = '<span>Backspace</span>';
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);
          });
          break;
        case 'Delete':
          keyElement.innerHTML = '<span>Delete</span>';
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);
          });
          break;
        case 'CapsLock':
          keyElement.innerHTML = '<span>CapsLock</span>';
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('mousedown', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('keyboard__capslock--active', this.props.capsLock);
          });
          break;
        case 'Shift':
          keyElement.innerHTML = '<span>Shift</span>';
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('mousedown', () => {
            this.toggleCapsLock();
          });
          keyElement.addEventListener('mouseup', () => {
            this.toggleCapsLock();
          });
          break;
        case 'Enter':
          keyElement.innerHTML = '<span>Enter</span>';
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += '\n';
          });
          break;
        case 'Control':
          keyElement.innerHTML = '<span>Control</span>';
          break;
        case 'Alt':
          keyElement.innerHTML = '<span>Alt</span>';
          break;
        case 'space':
          keyElement.innerHTML = '<span> </span>';
          keyElement.classList.add('keyboard__key--extra-wide')
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += ' ';
          });
          break;
        case 'Tab':
          keyElement.innerHTML = '<span>Tab</span>';
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('mousedown', () => {
            this.elements.textarea.value += `${' '.repeat(4)}`;
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
  }

  bindWithPhysicalKeyboard(event) {
    const { keys } = this.elements;
    for(let i = 0; i < keys.length; i++) {
      if (event.key === keys[i].innerText) {
        keys[i].classList.add('keyboard__key--active');

        (event.altKey && event.shiftKey) && this.toggleLanguage();

        switch(event.key) {
          case 'Backspace':
            this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);
            break;
          case 'Delete':
            break;
          case 'CapsLock':
            this.toggleCapsLock();
            keys[i].classList.toggle('keyboard__capslock--active', this.props.capsLock);
            break;
          case 'Shift':
            this.toggleCapsLock();
            break;
          case 'Enter':
            this.elements.textarea.value += '\n';
            break;
          case 'Control':
            break;
          case 'Alt':
            break;
          case 'space':
            this.elements.textarea.value += ' ';
            break;
          case 'Tab':
            this.elements.textarea.value += `${' '.repeat(4)}`;
            break;
          default:
            this.elements.textarea.value += keys[i].textContent;
            break;
        }
        break;
      }
    }
  }

  removeActiveClass(event) {
    const { keys } = this.elements;

    for(let i = 0; i < keys.length; i++) {
      if (event.key === keys[i].innerText) {
        keys[i].classList.remove('keyboard__key--active');
        (event.key === 'Shift') && this.toggleCapsLock();

        break;
      }
    }
  }

  toggleCapsLock() {
    this.props.capsLock = !this.props.capsLock;
    for(const key of this.elements.keys) {
      if(key.childElementCount === 0) {
        key.textContent = this.props.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  }

  toggleLanguage() {
    this.props.language = this.props.language === 'en' ? 'ru' : 'en';
    this.elements.keyContainer.innerHTML = '';
    this.elements.keyContainer.appendChild(this.createKeys(this.props.language));
    this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');
  }
}