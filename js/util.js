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


export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
