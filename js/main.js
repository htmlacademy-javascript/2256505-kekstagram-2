import { renderCards } from './render-cards.js';
import './form.js';
import { showError } from './util.js';
import { getData } from './api.js';
import { initFilters } from './filters.js';

getData()
  .then((photos) => {
    renderCards(photos);
    initFilters(photos);
  })
  .catch(() => {
    showError();
  });
