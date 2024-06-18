const navMenuEl = document.querySelector('.nav__menu');
const navToggleEl = document.querySelector('.js-toggle-button');
const toggleMobileMenu = () => {
  navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.toggle('nav__menu--closed');
    navMenuEl.classList.toggle('nav__menu--opened');
  });
};

export { toggleMobileMenu };
