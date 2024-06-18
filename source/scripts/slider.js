const paginationButtons = document.querySelectorAll('.slider-pagination__button');
const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const heroSection = document.querySelector('.hero');
const totalSlides = slides.length;
const heroBackgroundColors = {
  0: '#f3ebe1', // $bg-flat-white
  1: '#eae6fc', // $bg-lavender-latte
  2: '#e5e6e8' // $bg-espresso
};
let currentSlide = 0;
const initializeSlider = () => {
  const showSlide = (currentSlideIndex) => {
    slides.forEach((slider) => slider.classList.remove('slider__item--current'));
    paginationButtons.forEach((button) => button.classList.remove('slider-pagination__button--current'));
    slides[currentSlideIndex].classList.add('slider__item--current');
    paginationButtons[currentSlideIndex].classList.add('slider-pagination__button--current');
    prevButton.style.cursor = currentSlideIndex === 0 ? 'default' : 'pointer';
    nextButton.style.cursor = currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer';
    currentSlide = currentSlideIndex;
    // Изменение цвета фона в зависимости от активного слайда
    heroSection.style.backgroundColor = heroBackgroundColors[currentSlideIndex] || heroBackgroundColors[0];
  };
  paginationButtons.forEach((button, paginationButtonIndex) => {
    button.addEventListener('click', () => showSlide(paginationButtonIndex));
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
};

export { initializeSlider };
