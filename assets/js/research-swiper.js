document.addEventListener('DOMContentLoaded', function () {
  const breakpoint = window.matchMedia('(min-width: 768px)');
  let swiper = null;

  function enableSwiper() {
    swiper = new Swiper('.research-swiper', {
      loop: false,
      spaceBetween: 30,
      autoHeight: true,
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

    swiper.update();
    swiper.updateAutoHeight(0);
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
