const aboutDatabase = {
  introduction: {
    preTitle: 'Namaste India!',
    title: 'SAI Organizing The<br>Summer-Camp 2023',
    description: `
      This is website build for the SIA Summer Camp event at Jawaharlal Nehru Stadium (Delhi).
      Jawaharlal Nehru Stadium is a multi-sports stadium located in New Delhi, India.
      It is named after the first Prime Minister of India. Primarily a venue for
      football and athletics. We are organizing many sports and entertainment events
      in summer-Camp. tickets and regeneration form are going to be vanish soon.
      So what are you Waiting for hit registration button or grab your sit with tickets.
      gear up! gear up! gear up...!
    `,
    manager: 'Adarsh',
    managerEmail: 'adi8090808766@gmail.com',
  },
};

const aboutIntroduction = document.getElementById('aboutIntroduction');
aboutIntroduction.innerHTML += `
  <div class="namaste" data-aos="fade-up">
      <h2 title="Greeting">${aboutDatabase.introduction.preTitle}</h2>
      <h1 title="Our Program">${aboutDatabase.introduction.title}</h1>
    </div>

    <div class="txt-container" data-aos="fade-up">
      <p title="Website Description">
        ${aboutDatabase.introduction.description}
      </p>
    </div>
    <p title="Doubt ??" class="contact" data-aos="fade-up">
      If you have further questions about the re-opening event please reach
      out to our volunteer<br><a title="Mail our Manager" href="mailto:${aboutDatabase.introduction.managerEmail}">${aboutDatabase.introduction.manager}</a>
    </p>
`;
