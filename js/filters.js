import { Filters, numberOfRandomItem } from './const.js';
import { renderCards } from './render-cards';
import { debounce } from './util.js';

const filtersTag = document.querySelector('.img-filters');
const filterFormTag = document.querySelector('.img-filters__form');

let localPhotos;

const debouncedRenderCards = debounce(renderCards);

export const initFilters = (pictures) => {
  filtersTag.classList.remove('img-filters--inactive');
  localPhotos = [...pictures];
};

const filterActions = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, numberOfRandomItem)
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

filterFormTag.addEventListener('click', (evt) => {
  const button = evt.target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    debouncedRenderCards(filterActions[button.id]());
  }
});
