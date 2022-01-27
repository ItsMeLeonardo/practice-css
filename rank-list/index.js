/* IMG to shadow*/
const makeShadowImg = (
  img = null,
  { x = "0", y = "1.5rem", blur = 20, scale = 1 } = {}
) => {
  if (!img) return;

  const imgContainer = img.parentElement;

  const styleToShadow = `
    left: ${x};
    top: ${y};
    position: absolute;
    filter: blur(${blur}px);
    z-index: 0;
    transform: scale(${scale});
  `;

  window.addEventListener("load", () => {
    const imgClone = img.cloneNode(true);
    console.log({ imgClone });
    imgContainer.style.position = "relative";

    img.style.position = "relative";
    img.style.zIndex = "10";

    imgClone.style.cssText = styleToShadow;
    imgContainer.append(imgClone);
  });
};

const images = document.querySelectorAll(".Card-img img");
const optionsToShadowImg = { x: "0", y: "1.5rem", blur: "20", scale: ".75" };

images.forEach((img) => {
  makeShadowImg(img, optionsToShadowImg);
});

/* swiper */
const swiper = new Swiper(".mySwiper", {
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
  },
});
