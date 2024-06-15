/* Range слайдер */

const rangeSlider = document.querySelector('.range-slider');
const inputMin = document.querySelector('.range__field--min');
const inputMax = document.querySelector('.range__field--max');
const inputs = [inputMin, inputMax];
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [1000]
    }
  });
  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]) || '';
  });
  const setRangeSlider = (input, value) => {
    const arr = [null, null];
    arr[input] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((input, index) => {
    input.addEventListener('change', (event) => {
      setRangeSlider(index, event.currentTarget.value);
    });
  });
}

/* Мобильное меню */
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.js-toggle-button');

navToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('nav__menu--closed')) {
    navMenu.classList.remove('nav__menu--closed');
    navMenu.classList.add('nav__menu--opened');
  } else {
    navMenu.classList.remove('nav__menu--opened');
    navMenu.classList.add('nav__menu--closed');
  }
});
