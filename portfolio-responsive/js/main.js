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
let swiperPortfolio = new Swiper('.portfolio__container', {
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
  
/* ========== Swiper Testimonial ========== */
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568:{
      slidesPerView: 2,
    },
  },
});

/* ========== Scroll sections active link ========== */
const sections = document.querySelectorAll('section[id]');

function scrollActive () {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    let sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    }else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ========== Change background header ========== */
const scrollHeader = () => {
  const nav = document.querySelector('#header');

  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/* ========== Show scroll up ========== */
const scrollUp = () => {
  const scrollUp = document.querySelector('#scrollUp');
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/* ========== Dark light theme ========== */
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme tha the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'uil-moon' : 'uil-sun';

//we validate if the user previously chose a topic
if (selectedTheme){
  //if the validation is fulfilled, we ask what the issue was to know if we activated of deactivated the dark-theme
  document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add':'remove'](iconTheme);
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=> {
  //add or remove the (dark / icon) theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //we save a theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});