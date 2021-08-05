'use strict';

let accordions = document.querySelectorAll('.accordion');
let accordionLists = document.querySelectorAll('.footer__data-list');

const removeClass = (arr, nameClass) => {
  arr.forEach((elem) => {
    elem.classList.remove(nameClass);
  });
};

removeClass(accordions, 'accordion--without-js');
removeClass(accordionLists, 'footer__data-list--without-js');

accordions.forEach((elem) => {
  elem.addEventListener('click', () => {
    let list = elem.querySelector('.footer__data-list');
    elem.classList.toggle('accordion--open');
    list.classList.toggle('footer__data-list--open');
  });
});
