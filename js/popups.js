import { Popups } from './const.js';

const bodyTag = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const popups = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

export const showPopup = (status) => {
  const newPopup = popups[status].cloneNode(true);
  bodyTag.append(newPopup);
  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(status) || target.classList.contains(`${status}__button`)) {
      newPopup.remove();
    }
  });
};
