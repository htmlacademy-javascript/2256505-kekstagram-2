// Генератор случайных целых чисел

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};


// получение случайного элемента массива
const getElementArray = (array) => {
  const element = array[getRandomInteger(0, array.length - 1)];
  return element;
};

export { getRandomInteger, getElementArray };
