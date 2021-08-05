'use strict';

let accordions = document.querySelectorAll('.accordion');
// let accordionTitles = document.querySelectorAll('footer__data-title');
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
    // removeClass(accordions, 'accordion--without-js');
    // removeClass(accordionLists, 'footer__data-list--without-js');
    let list = elem.querySelector('.footer__data-list');

    // if (elem.classList.contains('accordion--open') && list.classList.contains('footer__data-list--open')) {
    //   elem.classList.remove('accordion--open');
    //   list.classList.remove('footer__data-list--open');
    // } else {
    //   elem.classList.add('accordion--open');
    //   list.classList.add('footer__data-list--open');
    // }
    elem.classList.toggle('accordion--open');
    list.classList.toggle('footer__data-list--open');
  });
});
