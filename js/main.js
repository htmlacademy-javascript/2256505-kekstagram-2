import { getCards } from './data.js';
import { renderCards } from './render-cards.js';
import './form.js';

const photos = getCards();
renderCards(photos);

