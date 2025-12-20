import { isValid, resetValidation } from './validation.js';

const formTag = document.querySelector('#upload-select-image');
const inputFileTag = formTag.querySelector('#upload-file');
const modalFormTag = formTag.querySelector('.img-upload__overlay');
const bodyTag = document.body;
const closeButtonTag = formTag.querySelector('#upload-cancel');

const showModal = (isShown = true) => {
  if (isShown) {
    modalFormTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalFormTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const closeForm = () => {
  showModal(false);
  formTag.reset();
  resetValidation();
};

inputFileTag.addEventListener('change', () => {
  showModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }

});
