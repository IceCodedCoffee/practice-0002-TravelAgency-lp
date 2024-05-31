const hamburger = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    showcase.classList.toggle('active');
})