const paginationLinks = document.querySelectorAll('.pagination__list .pagination__link');
const prevLink = document.querySelector('.pagination__prev');
const nextLink = document.querySelector('.pagination__next');
const togglePrevNextVisibility = () => {
  const firstLink = paginationLinks[0];
  const lastLink = paginationLinks[paginationLinks.length - 1];
  prevLink.classList.toggle('pagination__link-hidden', firstLink.classList.contains('pagination__link-current'));
  nextLink.classList.toggle('pagination__link-hidden', lastLink.classList.contains('pagination__link-current'));
};

export { togglePrevNextVisibility };
