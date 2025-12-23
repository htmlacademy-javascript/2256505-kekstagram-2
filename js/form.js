import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { Popups, SubmitCaptions } from './const.js';
import { postData } from './api.js';

const formTag = document.querySelector('#upload-select-image');
const inputFileTag = formTag.querySelector('#upload-file');
const modalFormTag = formTag.querySelector('.img-upload__overlay');
const bodyTag = document.body;
const closeButtonTag = formTag.querySelector('#upload-cancel');
const imageTag = formTag.querySelector('.img-upload__preview img');
const submitButtonTag = formTag.querySelector('#upload-submit');

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
  resetScale();
  resetEffects();
};

const setPreview = () => {
  const file = inputFileTag.files[0];
  const fileUrl = URL.createObjectURL(file);
  imageTag.src = fileUrl;
};

inputFileTag.addEventListener('change', () => {
  showModal();
  setPreview();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButtonTag.disabled = isBlocked;
  submitButtonTag.textContent = isBlocked
    ? SubmitCaptions.SENDING
    : SubmitCaptions.IDLE;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton();
    postData(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeForm();
        showPopup(Popups.SUCCESS);
      })
      .finally(() => {
        blockSubmitButton(false);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      });

  }
});
