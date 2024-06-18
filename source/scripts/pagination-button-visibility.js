const paginationLinksEl = document.querySelectorAll('.pagination__list .pagination__link');
const prevLinkEl = document.querySelector('.pagination__prev');
const nextLinkEl = document.querySelector('.pagination__next');
const togglePrevNextVisibility = () => {
  const firstLink = paginationLinksEl[0];
  const lastLink = paginationLinksEl[paginationLinksEl.length - 1];
  prevLinkEl.classList.toggle('pagination__link-hidden', firstLink.classList.contains('pagination__link-current'));
  nextLinkEl.classList.toggle('pagination__link-hidden', lastLink.classList.contains('pagination__link-current'));
};

export { togglePrevNextVisibility };
