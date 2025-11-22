// Константы

const DESCRIPTIONS = [
  'Вид на пляж отеля',
  'Дорога к пляжу',
  'Лазурный берег',
  'Девушка с фотоаппаратом',
  'Ванная для рисовых человечков',
  'Черная машина',
  'Две половинки клубники',
  'Две кружки морса',
  'Смотри! Самолет',
  'Место для обуви',
  'Проход к морю',
  'Ауди',
  'Экзотическое блюдо',
  'Рол с котенком',
  'Космические тапки',
  'Небесный океан',
  'Грандиозный хор',
  'Ретро автомобиль',
  'Тапочки с подсветкой',
  'Пальмы в отеле',
  'Блюдо из курицы',
  'Закат на море',
  'Краб',
  'Руки вверх',
  'В брод через реку с бегемотами'
];

const MESSAGES_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AVTOR_NAMES = [
  'Михаил',
  'Александр',
  'Артём',
  'Матвей',
  'Тимофей',
  'Максим',
  'Лев',
  'Марк',
  'Иван',
  'Дмитрий',
  'Мирон',
  'София',
  'Ева',
  'Анна',
  'Мария',
  'Варвара',
  'Василиса',
  'Виктория',
  'Александра',
  'Полина',
  'Елизавета'
];

const LIKES_MIN_AMOUNT = 15;
const LIKES_MAX_AMOUNT = 200;

const AVATAR_ID_MIN_ = 1;
const AVATAR_ID_MAX = 6;

const COMMENTS_MIN_AMOUNT = 0;
const COMMENTS_MAX_AMOUNT = 30;
const COMMENTS_MAX_ID = 30000;

const CADRS_AMOUNT = 25;


// Генератор случайных целых чисел

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
//console.log(getRandomInteger(AVATAR_MIN_AMOUNT, AVATAR_MAX_AMOUNT));

// получение случайного элемента массива
const getElementArray = (array) => {
  const element = array[getRandomInteger(0, array.length - 1)];
  return element;
};

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
const cards = () => Array.from({ length: CADRS_AMOUNT }, (_, i) => createCard(i));
const photos = cards();
console.log(photos);

