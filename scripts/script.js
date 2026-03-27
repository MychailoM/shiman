const openMobileMenu = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.backdrop');
const closeMobileMenu = document.querySelector('.close-mobile-menu');

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    backdrop.classList.add('open');
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    backdrop.classList.remove('open');
})