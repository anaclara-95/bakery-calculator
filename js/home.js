document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
  const previousButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');
  let activeIndex = slides.findIndex(slide => slide.classList.contains('is-active'));

  if (!slides.length || !previousButton || !nextButton || dots.length !== slides.length) return;
  if (activeIndex < 0) activeIndex = 0;

  const showSlide = index => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', String(isActive));
    });
  };

  previousButton.addEventListener('click', () => showSlide(activeIndex - 1));
  nextButton.addEventListener('click', () => showSlide(activeIndex + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => showSlide(dotIndex));
  });

  document.querySelectorAll('a[href="#calculator"]').forEach(link => {
    link.addEventListener('click', () => showSlide(0));
  });

  carousel.addEventListener('keydown', event => {
    if (event.target.matches('input, select, textarea, button')) return;
    if (event.key === 'ArrowLeft') showSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') showSlide(activeIndex + 1);
  });
});
