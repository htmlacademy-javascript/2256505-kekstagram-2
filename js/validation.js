import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAG_COUNT } from './const.js';

const formTag = document.querySelector('#upload-select-image');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagsTag = formTag.querySelector('.text__hashtags');

const pristine = new Pristine(
  formTag,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error'
  }
);

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagsCount = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAG_COUNT;
};

const checkUniqueHashtag = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);

  const uniques = [...new Set(hashtags)];
  return uniques.length === hashtags.length;
};

pristine.addValidator(
  hashtagsTag,
  checkHashtags,
  'Вы ввели не допустимые символы'
);

pristine.addValidator(
  hashtagsTag,
  checkHashtagsCount,
  `Количество хештегов не должно превышать ${MAX_HASHTAG_COUNT}`
);

pristine.addValidator(
  hashtagsTag,
  checkUniqueHashtag,
  'Хештеги должны быть уникальными'
);

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина комментария не должна превышать ${MAX_DESCRIPTION}`
);

export const isValid = () => pristine.validate();
export const resetValidation = () => {
  pristine.reset();
};
