/* ========== Menu show and hidden ========== */
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

/* ========== Menu Show ========== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/* ========== Menu hidden ========== */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/* ========== Remove menu mobile ========== */
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(i => i.addEventListener('click', linkAction));

/* ========== Accordion Skills ========== */
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let item of skillsContent) {
    item.className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  } 
}

skillsHeader.forEach(i => i.addEventListener('click', toggleSkills));

/* ========== Qualifications Tabs ========== */
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(content => {
      content.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});

/* ========== Services modal ========== */
const modalViews = document.querySelectorAll('.services__modal');
const modalButtons = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = (modalClick, action = 'close') => {
  if (action === 'open') { 
    modalViews[modalClick].classList.add('active-modal');
  } else {
    modalViews[modalClick].classList.remove('active-modal');
  }
}
modalButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal(i, 'open');
  });
});
modalCloses.forEach((close, i) => {
  close.addEventListener('click', () => {
    modal(i);
  });
});

/* ========== Swiper Portfolio ========== */
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
});