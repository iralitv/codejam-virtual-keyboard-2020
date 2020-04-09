import { insertLineBreak } from './languages';
import builtHtmlElement from './templateHelper';

export const createKeys = (keyLayout) => {
  const fragment = document.createDocumentFragment();

  Object.entries(keyLayout).forEach(([key, value]) => {
    const keyElement = builtHtmlElement({
      tagName: 'button',
      classList: ['keyboard__key'],
      attrs: {
        type: 'button',
      },
    });

    switch (key) {
      case 'Backspace':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'Delete':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'CapsLock':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'ShiftLeft':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'Enter':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--wide');
        break;
      case 'ControlLeft':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'AltLeft':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'Space':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--extra-wide');
        break;
      case 'Tab':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'Lang':
        keyElement.innerHTML = `<span>${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'ArrowUp':
        keyElement.innerHTML = `<span class="arrow arrow-up">${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'ArrowLeft':
        keyElement.innerHTML = `<span class="arrow arrow-left">${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'ArrowRight':
        keyElement.innerHTML = `<span class="arrow arrow-right">${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      case 'ArrowDown':
        keyElement.innerHTML = `<span class="arrow arrow-down">${value}</span>`;
        keyElement.classList.add('keyboard__key--medium');
        break;
      default:
        keyElement.textContent = value.toLowerCase();
        break;
    }

    fragment.appendChild(keyElement);
    if (insertLineBreak(value)) {
      fragment.appendChild(document.createElement('br'));
    }
  });

  return fragment;
};

export default createKeys;
