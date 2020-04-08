import { insertLineBreak, languages } from './languages';
import builtHtmlElement from './templateHelper';

export const createKeys = (language) => {
  const fragment = document.createDocumentFragment();

  languages[language].forEach((key) => {
    const keyElement = builtHtmlElement({
      tagName: 'button',
      classList: ['keyboard__key'],
      attrs: {
        type: 'button',
      },
    });

    switch (key) {
      case 'Backspace':
        keyElement.innerHTML = '<span>Backspace</span>';
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'Delete':
        keyElement.innerHTML = '<span>Delete</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'CapsLock':
        keyElement.innerHTML = '<span>CapsLock</span>';
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'Shift':
        keyElement.innerHTML = '<span>Shift</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'Enter':
        keyElement.innerHTML = '<span>Enter</span>';
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'Control':
        keyElement.innerHTML = '<span>Control</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'Alt':
        keyElement.innerHTML = '<span>Alt</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'space':
        keyElement.innerHTML = '<span>&#32</span>';
        keyElement.classList.add('keyboard__key--extra-wide');
        break;
      case 'Tab':
        keyElement.innerHTML = '<span>Tab</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'language':
        keyElement.innerHTML = '<span>lang</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'up':
        keyElement.innerHTML = '<span class="arrow arrow-up">ArrowUp</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'left':
        keyElement.innerHTML = '<span class="arrow arrow-left">ArrowLeft</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'right':
        keyElement.innerHTML = '<span class="arrow arrow-right">ArrowRight</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'down':
        keyElement.innerHTML = '<span class="arrow arrow-down">ArrowDown</span>';
        keyElement.classList.add('keyboard__key--medium');
        break;
      default:
        keyElement.textContent = key.toLowerCase();
        break;
    }

    fragment.appendChild(keyElement);
    if (insertLineBreak(key)) {
      fragment.appendChild(document.createElement('br'));
    }
  });

  return fragment;
};

export default createKeys;
