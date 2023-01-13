//  Navigation mobile burger overlay
const menuBtn = document.getElementById('burger-container');
const navOverlay = document.getElementById('nav');
const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
function overlay() {
  navOverlay.classList.toggle('invisible');
  burgerBar.classList.toggle('active');
  navOverlay.style.animation = 'awesome-out 1s';
}

menuBtn.addEventListener('click', overlay);
navList.addEventListener('click', overlay);

// logo Dynamics
const ourLogo = 'camp-logowithout.png';
const ourLogos = document.querySelectorAll('.ourLogo');
ourLogos.forEach((element) => {
  element.setAttribute('src', ourLogo);
});

// Partner logo dynamics
const partnersLogo = [
  ['./brands/icc-withoutbk.png', 'https://www.icc-cricket.com/homepage'],
  ['./brands/isl.webp', 'https://www.indiansuperleague.com/'],
  ['./brands/world-taekwondobk.png', 'http://www.worldtaekwondo.org/index.html'],
  ['./brands/Sai-removebg-preview.png', 'https://sportsauthorityofindia.nic.in/sai/'],
  ['./brands/wrestling-logo-withoutbackground.jpg', 'http://wrestlingfederationofindia.org/'],
];

const partnerList = document.getElementById('partnerList');
partnerList.innerHTML = '';
partnersLogo.forEach((e) => {
  partnerList.innerHTML += `
    <li>
        <a href="${e[1]}" target="_blank" rel="noopener noreferrer">
          <img title="Partner's Logo And Link" src="${e[0]}" alt="partner-logo" class="partner-logo">
        </a>
    </li>
  `;
});

const partnersLogoList = document.querySelectorAll('.partner-logo');
partnersLogoList[1].classList.add('sec');
partnersLogoList[3].classList.add('sec2');
