/* Мобильное меню */
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.js-toggle-button');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--closed');
  navMenu.classList.toggle('nav__menu--opened');
});

/* Слайдер товаров */
const paginationButtons = document.querySelectorAll('.slider-pagination__button');
const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const totalSlides = slides.length;
let currentSlide = 0;
const showSlide = (index) => {
  slides.forEach((slider) => slider.classList.remove('slider__item--current'));
  paginationButtons.forEach((button) => button.classList.remove('slider-pagination__button--current'));
  slides[index].classList.add('slider__item--current');
  paginationButtons[index].classList.add('slider-pagination__button--current');
  prevButton.style.cursor = index === 0 ? 'default' : 'pointer';
  nextButton.style.cursor = index === totalSlides - 1 ? 'default' : 'pointer';
  currentSlide = index;
};
paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => showSlide(index));
});
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});
nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});
showSlide(currentSlide);

/* Рендж слайдер */
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

/* Показ и скрытие кнопок в пагинации каталога */
const paginationLinks = document.querySelectorAll('.pagination__list .pagination__link');
const prevLink = document.querySelector('.pagination__prev');
const nextLink = document.querySelector('.pagination__next');
const togglePrevNextVisibility = () => {
  const firstLink = paginationLinks[0];
  const lastLink = paginationLinks[paginationLinks.length - 1];
  prevLink.classList.toggle('pagination__link-hidden', firstLink.classList.contains('pagination__link-current'));
  nextLink.classList.toggle('pagination__link-hidden', lastLink.classList.contains('pagination__link-current'));
};
togglePrevNextVisibility();
