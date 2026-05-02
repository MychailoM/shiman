const openWindowModal = document.getElementById('open-window-modal');
const windowBackdrop = document.querySelector('.window-backdrop');
const closeWindowModal = document.getElementById('close-window-modal');


openWindowModal.addEventListener('click', () => {
  windowBackdrop.classList.add('active');
  document.body.classList.add('no-scroll');
})

closeWindowModal.addEventListener('click', () => {
    windowBackdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
})