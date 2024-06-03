const hamburger = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    showcase.classList.toggle('active');
    mobileMenu.classList.toggle('active');

})