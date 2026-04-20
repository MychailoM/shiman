const openMobileMenu = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu-nav-link');

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  });
})


const services = document.querySelectorAll('.cleaning-area');

services.forEach((service) => {
  const title = service.querySelector('.cleaning-area-title');

  title.addEventListener('click', () => {
    if (window.innerWidth >= 720) return;

    const isActive = service.classList.contains('active');

    services.forEach(item => item.classList.remove('active'));

    if (!isActive) {
      service.classList.add('active');
    }
  });
});


const contactBtn = document.querySelector('.contact-btn');
const contactBackdrop = document.querySelector('.contact-backdrop');
const contactClose = document.querySelector('.close-contact-modal');


contactBtn.addEventListener("click", () => {
  contactBackdrop.classList.add('active');
  document.body.classList.add('no-scroll');
});

contactClose.addEventListener("click", () => {
  contactBackdrop.classList.remove('active');
  document.body.classList.remove('no-scroll');
});


const onTop = document.querySelector('.onTop');

onTop.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


