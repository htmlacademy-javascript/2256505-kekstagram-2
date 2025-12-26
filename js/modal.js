import { STEP_COMMENTS } from './const.js';
import { addEscControl, removeEscControl } from './esc-control.js';

const modalTag = document.querySelector('.big-picture');
const imageTag = modalTag.querySelector('.big-picture__img img');
const captionTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const shownCommentsTag = modalTag.querySelector('.social__comment-shown-count');
const totalCommentsTag = modalTag.querySelector('.social__comment-total-count');
const closeButtonTag = modalTag.querySelector('.big-picture__cancel');
const bodyTag = document.body;
const commentTemplate = modalTag.querySelector('.social__comment');
const commentsContainerTag = modalTag.querySelector('.social__comments');
const buttonLoaderTag = modalTag.querySelector('.social__comments-loader');

let localComments;
let shownComments;

const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const renderStatistic = () => {
  shownCommentsTag.textContent = shownComments;
};

const showLoaderButton = () => {
  if (!localComments.length) {
    buttonLoaderTag.classList.add('hidden');
  } else {
    buttonLoaderTag.classList.remove('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, STEP_COMMENTS).forEach(({ avatar, name, message }) => {
    const newComment = commentTemplate.cloneNode(true);
    const userpic = newComment.querySelector('.social__picture');
    userpic.src = avatar;
    userpic.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);

    shownComments++;
  });
  commentsContainerTag.append(fragment);

  renderStatistic();
  showLoaderButton();
};

const renderModal = ({ url, description, likes }) => {
  imageTag.src = url;
  imageTag.alt = description;
  captionTag.textContent = description;
  likesTag.textContent = likes;
  totalCommentsTag.textContent = localComments.length;

  renderComments();
};

export const openModal = ({ url, description, comments, likes }) => {
  localComments = [...comments];
  commentsContainerTag.innerHTML = '';
  shownComments = 0;
  showModal();
  renderModal({ url, description, likes });
  addEscControl(() => {
    showModal(false);
  });
};

closeButtonTag.addEventListener('click', () => {
  showModal(false);
  removeEscControl();
});

buttonLoaderTag.addEventListener('click', () => {
  renderComments();
});
