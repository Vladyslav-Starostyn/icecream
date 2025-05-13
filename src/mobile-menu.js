(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('.body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// const refs = {
//   mobileBtn: document.querySelector('[data-js-open-menu]'),
//   mobileMenu: document.querySelector('[data-mobile-menu]'),
// };

// refs.mobileBtn.addEventListener('click', toggleMobileMenu);

// function toggleMobileMenu() {
//   refs.mobileMenu.classList.toggle('mobile-menu__content--is-hidden');
//   refs.mobileBtn.classList.toggle('is-open');

//   const isBodyFixed = refs.mobileBtn.classList.contains('is-open');
//   document.body.style.overflow = isBodyFixed ? 'hidden' : 'initial';
// }
