const openMobileMenu = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');

})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');

})

