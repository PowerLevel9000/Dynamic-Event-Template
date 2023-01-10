
const trainer = document.querySelectorAll('.trainer-card');
const button = document.querySelector('.trainer-btn');
const less = document.getElementById('morles');
const up = document.getElementById('chevron')
function display() {
    for (let i = 2; i < trainer.length; i++) {
        trainer[i].classList.toggle('invisible')
    }
    if (less.innerText === 'MORE ' && up.classList.value === "fas fa-chevron-down") {
        less.innerText = 'LESS ';
        up.classList.value = "fas fa-chevron-up"
    }else if (less.innerText === 'LESS ' && up.classList.value === "fas fa-chevron-up") {
        less.innerText = 'MORE ';
        up.classList.value = "fas fa-chevron-down"
    }
}

button.addEventListener('click', display)

if (window.innerWidth <= 768) {
    const menuBtn = document.getElementById('burger-container');
    const navOverlay = document.getElementById('nav');
    const navList = document.getElementsByClassName('menu')[0];
    const burgerBar = document.getElementsByClassName('hamRotate')[0];
    function overlay() {

        navOverlay.classList.toggle('invisible');
        burgerBar.classList.toggle('active');
        navOverlay.style.animation = 'awesome-out 1s'

    }
    menuBtn.addEventListener('click', overlay);
    navList.addEventListener('click', overlay);

}

