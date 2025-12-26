import { Effects, EffectSettings } from './const.js';

const formTag = document.querySelector('#upload-select-image');
const effectsListTag = formTag.querySelector('.effects__list');
const sliderElement = formTag.querySelector('.effect-level__slider');
const valueTag = formTag.querySelector('.effect-level__value');
const imageTag = formTag.querySelector('.img-upload__preview img');
const sliderContainerTag = formTag.querySelector('.effect-level');


let currentEffect = Effects.NONE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});


const renderEffect = () => {
  if (currentEffect === Effects.NONE) {
    imageTag.style.filter = '';
  } else {
    const { style, units } = EffectSettings[currentEffect];
    imageTag.style.filter = `${style}(${valueTag.value}${units})`;
  }
};

const updateSlider = () => {
  const { range, start, step } = EffectSettings[currentEffect];
  sliderElement.noUiSlider.updateOptions({ range, start, step });
};

const showSlider = () => {
  if (currentEffect === Effects.NONE) {
    sliderContainerTag.classList.add('hidden');
  } else {
    sliderContainerTag.classList.remove('hidden');
  }
};

effectsListTag.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  showSlider();
  updateSlider();
});

sliderElement.noUiSlider.on('update', () => {
  valueTag.value = sliderElement.noUiSlider.get();
  renderEffect();
});
export const resetEffects = () => {
  currentEffect = Effects.NONE;
  showSlider();
  updateSlider();
};

resetEffects();
