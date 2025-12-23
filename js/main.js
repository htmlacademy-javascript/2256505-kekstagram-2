import { renderCards } from './render-cards.js';
import './form.js';
import { showError } from './util.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(() => {
    showError();
  });
