const openMobileMenu = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu-nav-link');

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow= 'hidden';
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflowY = 'auto';
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflowY = 'auto';
  });
});



const reviewSlides = document.getElementById("reviews-slides");

if (reviewSlides) {
  const reviewTotalSlides = reviewSlides.children.length;
  const reviewsNum = document.querySelector(".reviews-num");

  let reviewIndex = 0;

  function showSlide(i) {
    if (i < 0) reviewIndex = reviewTotalSlides - 1;
    else if (i >= reviewTotalSlides) reviewIndex = 0;
    else reviewIndex = i;

    reviewSlides.style.transform = `translateX(-${reviewIndex * 100}%)`;
    reviewsNum.textContent = `${reviewIndex + 1}/${reviewTotalSlides}`;
  }

  reviewsNum.textContent = `1/${reviewTotalSlides}`;

  document.querySelector(".prevSlide")?.addEventListener("click", () => {
    showSlide(reviewIndex - 1);
  });

  document.querySelector(".nextSlide")?.addEventListener("click", () => {
    showSlide(reviewIndex + 1);
  });
}

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const plus = item.querySelector('.plus');

  function toggleAccordion() {
    const isActive = item.classList.contains('accordion-active');

    items.forEach(i => i.classList.remove('accordion-active'));

    if (!isActive) {
      item.classList.add('accordion-active');
    }
  }

  title.addEventListener('click', toggleAccordion);
  plus.addEventListener('click', toggleAccordion);
});
