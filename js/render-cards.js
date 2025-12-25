import { openModal } from './modal.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

let localPictures;

const clear = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

export const renderCards = (pictures) => {
  localPictures = [...pictures];
  clear();
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const { url, description, comments, likes, id } = picture;
    const newCard = template.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newCard.querySelector('.picture__comments').textContent = comments.length;
    newCard.querySelector('.picture__likes').textContent = likes;
    newCard.dataset.photoId = id;
    fragment.append(newCard);
  });
  picturesContainer.append(fragment);
};

picturesContainer.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.photoId);
    const currentPhoto = localPictures.find((item) => item.id === id);
    openModal(currentPhoto);
  }
});
