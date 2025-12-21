document.querySelectorAll('.carousel-nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.slide;
    const slides = btn.closest('.research-carousel')
                     .querySelectorAll('.research-slide');

    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  });
});
