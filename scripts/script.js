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
    document.body.style.overflowY= 'auto';
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflowY = 'auto';
  });
});



const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const reviewsNum = document.querySelector(".reviews-num");
let index = 0;

function showSlide(i) {
  if (i < 0) index = totalSlides - 1;
  else if (i >= totalSlides) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
  reviewsNum.textContent = `${index + 1}/${totalSlides}`;
}

reviewsNum.textContent = `1/${totalSlides}`;

document.querySelector(".prevSlide").addEventListener("click", () => {
  showSlide(index - 1);
});

document.querySelector(".nextSlide").addEventListener("click", () => {
  showSlide(index + 1);
});




const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  item.querySelector('.accordion-title').addEventListener('click', () => {
    
    items.forEach(i => i.classList.remove('accordion-active'));
    
    item.classList.add('accordion-active');
  });
});