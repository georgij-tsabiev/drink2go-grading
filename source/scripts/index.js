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
  navMenu.classList.toggle('nav__menu--closed');
  navMenu.classList.toggle('nav__menu--opened');
});

/* const paginationLinks = document.querySelectorAll('.pagination__list .pagination__link');
const prevLink = document.querySelector('.pagination__prev');
const nextLink = document.querySelector('.pagination__next');

function updateDisabledState() {
  const firstLink = paginationLinks[0];
  const lastLink = paginationLinks[paginationLinks.length - 1];

  if (firstLink.classList.contains('pagination__link--current')) {
    prevLink.classList.add('pagination__link-hidden');
  } else {
    prevLink.classList.remove('pagination__link-hidden');
  }

  if (lastLink.classList.contains('pagination__link--current')) {
    nextLink.classList.add('pagination__link-hidden');
  } else {
    nextLink.classList.remove('pagination__link-hidden');
  }
}
// Initialize the disabled state
updateDisabledState(); */

const paginationLinks = document.querySelectorAll('.pagination__list .pagination__link');
const prevLink = document.querySelector('.pagination__prev');
const nextLink = document.querySelector('.pagination__next');

function updateDisabledState() {
  const firstLink = paginationLinks[0];
  const lastLink = paginationLinks[paginationLinks.length - 1];

  if (firstLink.classList.contains('pagination__link-current')) {
    prevLink.classList.add('pagination__link-hidden');
  } else {
    prevLink.classList.remove('pagination__link-hidden');
  }

  if (lastLink.classList.contains('pagination__link-current')) {
    nextLink.classList.add('pagination__link-hidden');
  } else {
    nextLink.classList.remove('pagination__link-hidden');
  }
}
// Initialize the disabled state
updateDisabledState();
