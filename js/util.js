import { DELAY } from './const.js';

const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const bodyTag = document.body;

export const showError = () => {
  const newError = errorTemplate.cloneNode(true);
  bodyTag.append(newError);
  setTimeout(() => {
    newError.remove();
  }, DELAY);
};
