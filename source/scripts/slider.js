const paginationButtonsEl = document.querySelectorAll('.slider-pagination__button');
const slidesEl = document.querySelectorAll('.slider__item');
const prevButtonEl = document.querySelector('.slider-button-prev');
const nextButtonEl = document.querySelector('.slider-button-next');
const heroSectionEl = document.querySelector('.hero');
const totalSlides = slidesEl.length;
const heroBackgroundColors = {
  0: '#f3ebe1', // $bg-flat-white
  1: '#eae6fc', // $bg-lavender-latte
  2: '#e5e6e8' // $bg-espresso
};
let currentSlide = 0;
const initializeSlider = () => {
  const showSlide = (currentSlideIndex) => {
    slidesEl.forEach((slider) => slider.classList.remove('slider__item--current'));
    paginationButtonsEl.forEach((button) => button.classList.remove('slider-pagination__button--current'));
    slidesEl[currentSlideIndex].classList.add('slider__item--current');
    paginationButtonsEl[currentSlideIndex].classList.add('slider-pagination__button--current');
    prevButtonEl.style.cursor = currentSlideIndex === 0 ? 'default' : 'pointer';
    nextButtonEl.style.cursor = currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer';
    currentSlide = currentSlideIndex;
    // Изменение цвета фона в зависимости от активного слайда
    heroSectionEl.style.backgroundColor = heroBackgroundColors[currentSlideIndex] || heroBackgroundColors[0];
  };
  paginationButtonsEl.forEach((button, paginationButtonIndex) => {
    button.addEventListener('click', () => showSlide(paginationButtonIndex));
  });
  prevButtonEl.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });
  nextButtonEl.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });
  showSlide(currentSlide);
};

export { initializeSlider };
