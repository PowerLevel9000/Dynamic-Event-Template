const menuBtn = document.getElementById('burger-container');
const navOverlay =document.getElementById('nav');
const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
console.log(menuBtn,navOverlay,navList);

function overlay() {
    navOverlay.classList.toggle('invisible');
    burgerBar.classList.toggle('active');
    navList.style.animation = 'awesome-out 2s'
}

menuBtn.addEventListener('click',overlay);
navList.addEventListener('click',overlay);
