// Data Base
const websiteDatabase = {
  introduction: {
    preTitle1: 'Gear up India!',
    preTitle2: 'Namaste India!',
    mainTitle: 'SAI<br>Organizing<br>Summer Camp 2023',
    description1: `After a long time we are finally back. Tell all
    your friends and come join us at our summer-camp event, where we will
    be running a bundle of fun, productive and interesting activities.
    Sports Authority of India is back With Summer Camp!`,
    date: '2023.3.15(Wed) ~ 2023.4.16(Sun)',
    credit: '@ C.C. Sports Authority Of India',
  },
  programCard: [
    {
      logo: `
      <span title="Program Logo" class="material-symbols-outlined symbols notranslate">
        sports_cricket
      </span>
    `,
      title: 'Cricket',
      description: `Cricket is a bat-and-ball game played between two teams of eleven players
      on a field at the centre of which is a 22-yard (20-metre)`,
    },
    {
      logo: `
      <span title="Program Logo" class="material-symbols-outlined symbols notranslate">
        sports_martial_arts
      </span>
    `,
      title: 'Martial Arts',
      description: `Martial arts are codified systems and traditions of combat practiced for a
        number of reasons such as self-defense`,
    },
    {
      logo: `
      <span title="Program Logo" class="material-symbols-outlined symbols notranslate">
        sports_mma
      </span>
    `,
      title: 'Boxing',
      description: `Boxing is a combat sport that involves fighting with fists. Traditionally,
        boxing has also been referred to as “pugilism,”`,
    },
    {
      logo: `
      <span title="Program Logo" class="material-symbols-outlined symbols notranslate">
        sports_soccer
      </span>
    `,
      title: 'Football',
      description: `Football is a team sport in which two teams play against each other to score
        their spherical ball in the other opponents net`,
    },
    {
      logo: `
      <i title="Program Logo" class="fa-solid fa-dumbbell symbols notranslate"></i>
    `,
      title: 'Weight lifting',
      description: `Weight lifting generally refers to activities in which people lift weights,
        often in the form of dumbbells or barbells`,
    },
  ],
};

const trainersDatabase = [
  {
    name: 'M. S. Dhoni',
    field: 'Indian Cricket Team Captain',
    info: `Mahendra Singh Dhoni, (born July 7, 1981, Ranchi, India),
     Indian cricketer whose rise to prominence in the early 21st century 
     culminated in his captaincy of the Indian national team that won the 
     one-day Cricket World Cup in 2011.`,
    image: './trainers/MS Dhoni.jpeg',
  },

  {
    name: 'Sunil Chhetri',
    field: 'Indian Football Team Captain',
    info: `The all-time top scorer for the Indian football team and its 
    captain for the better part of a decade, Sunil Chhetri is one of the 
    most decorated footballers in India.`,
    image: './trainers/Sunil_Chhetri_Indian_Football_Player.jpg',
  },

  {
    name: 'Mary Kom',
    field: 'Gold medalist Indian boxer',
    info: `Mangte Chungneijang Mary Kom OLY, famously known as Mary Kom, 
    is a famous Indian boxer and an incumbent member of the Parliament of India. 
    Mary Kom is an amateur boxer by profession and has also joined politics in 
    recent times.`,
    image: './trainers/mary-kom.jpeg',
  },

  {
    name: 'Vidyut Jammwal',
    field: 'Bollywood Actor And Martial Art Expert',
    info: `Vidyut Jammwal is an Indian film actor who predominantly works in Hindi 
    films. He is also a trained martial artist, having learned Kalaripayattu (a martial 
        art of Kerala) since the age of three. He is popularly known as "The New Age Action Hero."`,
    image: './trainers/dc-Cover-vvm15gmruhtq6aktn304hc9j96-20180624233605.Medi.jpeg',
  },

  {
    name: 'Vikas Thakur',
    field: 'Indian weightlifter',
    info: `Vikas Thakur, an Indian weightlifter from Ludhiana (Punjab), was born on 
    November 14, 1993. His hometown is in Patnoun, Himachal Pradesh, India. Weight of Vikas is 84 kg. 
    His coach is B. S. Medhwan.`,
    image: './trainers/vikas-thakur-asiad-afp.jpg',
  },

  {
    name: 'Adarsh and Ankur',
    field: 'Your Event Managers',
    info: `they will guide you about all events ,their schedule , location,
    requirements to participate, training fees and yeah of course your
    event tickets. if you have any query you can reach out to them
    at their cabin or desk`,
    image: './trainers/volunteers.jpg',
  },
];
// Program Introduction Dynamics

const introductionSection = document.getElementById('introductionSection');
introductionSection.innerHTML = `
  <h2 title="Warm Up">${websiteDatabase.introduction.preTitle1}</h2>
    <h1 title="Our Program">${websiteDatabase.introduction.mainTitle}</h1>
    <div class="deco-ball-1"></div>
    <div class="txt-container">
      <p title="Program Intro">
        ${websiteDatabase.introduction.description1}
      </p>
    </div>
    <div class="tag-container">
      <h3 title="Program Date">${websiteDatabase.introduction.date}</h3>
      <p title="Credit">
        ${websiteDatabase.introduction.credit}
      </p>
      <img src="./media/hitmark-gray.png" alt="deck" class="tag-hitmark">
      <i class="fas fa-globe-americas"></i>
    </div>
`;
// dynamic program cards
const programContainer = document.getElementById('programContainer');
websiteDatabase.programCard.forEach((element) => {
  programContainer.innerHTML += `
        <article class="main-card" data-aos="flip-left">
        <div class="program-logo">
          ${element.logo}
        </div>
        <h3 title="Program Title" class="m-card-title">${element.title}</h3>
        <div class="para-containor">
          <p title="Program Description" class="m-card-text">
            ${element.description}
          </p>
        </div>
      </article>
  `;
});

//  Dynamic inserting of trainer section
const trainers = document.querySelector('#trainer-container');
trainers.innerHTML = '';
for (let i = 0; i < trainersDatabase.length; i += 1) {
  const trainerCard = document.createElement('div');
  if (i > 1) {
    trainerCard.className = 'trainer-card invisible';
  } else {
    trainerCard.className = 'trainer-card';
  }

  trainerCard.innerHTML = `
        <div class= "trainer-frame" data-aos="flip-left">
          <img src="./media/11-chess-board-gray.png" alt="" class="trainer-deco">
          <img title="Our Trainer" src="${trainersDatabase[i].image}" alt="Our Trainers" class="trainer-img">
        </div>
        <div class="trainer-info" data-aos="flip-right">
          <h3 title="Trainer Name" class="trainer-name">${trainersDatabase[i].name}</h3>
          <h4 title="Trainer Field" class="trainer-occ">${trainersDatabase[i].field}</h4>
          <hr>
          <p Title="Trainer Info" class="trainer-para">${trainersDatabase[i].info}
          </p>
        </div>
    `;
  trainers.appendChild(trainerCard);
}

// more or less button work
const trainer = document.querySelectorAll('.trainer-card');
const button = document.querySelector('.trainer-btn');
const less = document.getElementById('morles');
const up = document.getElementById('chevron');
function display() {
  for (let i = 2; i < trainer.length; i += 1) {
    trainer[i].classList.toggle('invisible');
  }
  if (less.innerText === 'MORE ' && up.classList.value === 'fas fa-chevron-down') {
    less.innerText = 'LESS ';
    up.classList.value = 'fas fa-chevron-up';
  } else if (less.innerText === 'LESS ' && up.classList.value === 'fas fa-chevron-up') {
    less.innerText = 'MORE ';
    up.classList.value = 'fas fa-chevron-down';
  }
}
button.addEventListener('click', display);
