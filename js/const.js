export const SubmitCaptions = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};
export const DELAY = 5000;
export const STEP_COMMENTS = 5;
export const MAX_DESCRIPTION = 140;
export const HASHTAG_FORMULA = /^#[a-zа-я0-9]{1,19}$/i;
export const MAX_HASHTAG_COUNT = 5;
export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

export const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EffectSettings = {
  [Effects.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },

  [Effects.NONE]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: '',
    units: ''
  },


  [Effects.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },

  [Effects.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },

  [Effects.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },

  [Effects.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};


