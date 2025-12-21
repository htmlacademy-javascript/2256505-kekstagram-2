import { getCards } from './data.js';
import { renderCards } from './render-cards.js';

const photos = getCards();
renderCards(photos);

