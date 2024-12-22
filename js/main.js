
const buttons = document.querySelectorAll('button');
const themeToggle = document.getElementById('theme-toggle');


themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});