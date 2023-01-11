// About Page Navigation
const menuBtn = document.getElementById('burger-container');
const navOverlay = document.getElementById('nav');
const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
function overlay() {
  navOverlay.classList.toggle('invisible');
  burgerBar.classList.toggle('active');
  navOverlay.style.animation = 'awesome-out 1s';
}

if (window.innerWidth <= 768) {
  menuBtn.addEventListener('click', overlay);
  navList.addEventListener('click', overlay);
}
