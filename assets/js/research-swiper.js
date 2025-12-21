document.addEventListener('DOMContentLoaded', function () {
  const breakpoint = window.matchMedia('(min-width: 768px)');
  let swiper = null;

function enableSwiper() {
  swiper = new Swiper('.research-swiper', {
    loop: false,
    spaceBetween: 30,
    autoHeight: true,

    observer: true,
    observeParents: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true
    }
  });

  // Recalculate after all images inside swiper load
  const images = document.querySelectorAll('.research-swiper img');
  let loaded = 0;

  images.forEach(img => {
    if (img.complete) {
      loaded++;
    } else {
      img.addEventListener('load', onImgLoad);
    }
  });

  function onImgLoad() {
    loaded++;
    if (loaded === images.length) {
      swiper.update();
      swiper.updateAutoHeight(0);
    }
  }

  // Fallback in case there are no images
  if (images.length === 0) {
    swiper.update();
    swiper.updateAutoHeight(0);
  }
}


  function disableSwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  function breakpointChecker() {
    if (breakpoint.matches) {
      if (!swiper) enableSwiper();
    } else {
      disableSwiper();
    }
  }

  breakpointChecker();

  if (breakpoint.addEventListener) {
    breakpoint.addEventListener('change', breakpointChecker);
  } else {
    breakpoint.addListener(breakpointChecker);
  }

  window.addEventListener('load', function () {
    if (swiper) {
      swiper.update();
      swiper.updateAutoHeight(0);
    }
  });
});
