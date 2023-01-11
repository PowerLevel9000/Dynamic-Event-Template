const trainer1 = {
  name: 'M. S. Dhoni',
  field: 'Indian Cricket Team Captain',
  info: `Mahendra Singh Dhoni, (born July 7, 1981, Ranchi, India),
     Indian cricketer whose rise to prominence in the early 21st century 
     culminated in his captaincy of the Indian national team that won the 
     one-day Cricket World Cup in 2011.`,
  image: './Media/trainers/MS Dhoni.jpeg',
};

const trainer2 = {
  name: 'Sunil Chhetri',
  field: 'Indian Football Team Captain',
  info: `The all-time top scorer for the Indian football team and its 
    captain for the better part of a decade, Sunil Chhetri is one of the 
    most decorated footballers in India.`,
  image: './Media/trainers/Sunil_Chhetri_Indian_Football_Player.jpg',
};

const trainer3 = {
  name: 'Mary Kom',
  field: 'Gold medalist Indian boxer',
  info: `Mangte Chungneijang Mary Kom OLY, famously known as Mary Kom, 
    is a famous Indian boxer and an incumbent member of the Parliament of India. 
    Mary Kom is an amateur boxer by profession and has also joined politics in 
    recent times.`,
  image: './Media/trainers/mary-kom.jpeg',
};

const trainer4 = {
  name: 'Vidyut Jammwal',
  field: 'Bollywood Actor And Martial Art Expert',
  info: `Vidyut Jammwal is an Indian film actor who predominantly works in Hindi 
    films. He is also a trained martial artist, having learned Kalaripayattu (a martial 
        art of Kerala) since the age of three. He is popularly known as "The New Age Action Hero."`,
  image: './Media/trainers/dc-Cover-vvm15gmruhtq6aktn304hc9j96-20180624233605.Medi.jpeg',
};

const trainer5 = {
  name: 'Vikas Thakur',
  field: 'Indian weightlifter',
  info: `Vikas Thakur, an Indian weightlifter from Ludhiana (Punjab), was born on 
    November 14, 1993. His hometown is in Patnoun, Himachal Pradesh, India. Weight of Vikas is 84 kg. 
    His coach is B. S. Medhwan.`,
  image: './Media/trainers/vikas-thakur-asiad-afp.jpg',
};

const volunteers = {
  name: 'Adarsh and Ankur',
  field: 'Your Event Managers',
  info: `they will guide you about all events ,their schedule , location,
    requirements to participate, training fees and yeah of course your
    event tickets. if you have any query you can reach out to them
    at their cabin or desk`,
  image: './Media/trainers/volunteers.jpg',
};

const trainersDatabase = [trainer1, trainer2, trainer3, trainer4, trainer5, volunteers];

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
        <img src="./Media/11-chess-board-gray.png" alt="" class="trainer-deco">
        <img src="${trainersDatabase[i].image}" class="trainer-img">
        <div class="trainer-info">
          <h3 class="trainer-name">${trainersDatabase[i].name}</h3>
          <h4 class="trainer-occ">${trainersDatabase[i].field}</h4>
          <hr>
          <p class="trainer-para">${trainersDatabase[i].info}
          </p>
        </div>
    `;
  trainers.appendChild(trainerCard);
}