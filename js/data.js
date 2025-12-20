import { DESCRIPTIONS, MESSAGES_TEXT, AVTOR_NAMES, LIKES_MIN_AMOUNT, LIKES_MAX_AMOUNT, AVATAR_ID_MIN_, AVATAR_ID_MAX, COMMENTS_MIN_AMOUNT, COMMENTS_MAX_AMOUNT, COMMENTS_MAX_ID, CADRS_AMOUNT } from './const.js';

import { getRandomInteger, getElementArray } from './util.js';

//создание комментария
const getComent = () => {
  const comentId = getRandomInteger(1, COMMENTS_MAX_ID);
  return {
    id: comentId,
    avatar: `img/avatar-${getRandomInteger(AVATAR_ID_MIN_, AVATAR_ID_MAX)}.svg`,
    message: getElementArray(MESSAGES_TEXT),
    name: getElementArray(AVTOR_NAMES),
  };
};

//создаем массив комментариев
const createComments = () => {
  const comentAmount = getRandomInteger(COMMENTS_MIN_AMOUNT, COMMENTS_MAX_AMOUNT);
  return Array.from({ length: comentAmount }, getComent);
};

// Создание карточки

const createCard = (i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: DESCRIPTIONS[i],
  likes: getRandomInteger(LIKES_MIN_AMOUNT, LIKES_MAX_AMOUNT),
  comments: createComments()
});

//массив
const getCards = () => Array.from({ length: CADRS_AMOUNT }, (_, i) => createCard(i));

export {getCards};
