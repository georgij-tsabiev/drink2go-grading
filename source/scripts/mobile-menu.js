const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.js-toggle-button');
const toggleMobileMenu = () => {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--closed');
    navMenu.classList.toggle('nav__menu--opened');
  });
};

export { toggleMobileMenu };
