const showcase = document.querySelector('.showcase');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    showcase.classList.toggle('active');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});
