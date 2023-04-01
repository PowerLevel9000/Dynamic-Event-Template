const aboutDatabase = {
  introduction:{
    preTitle:'Namaste India!',
    title:'SAI Organizing The<br>Summer-Camp 2023',
    description:`
      This is website build for the SIA Summer Camp event at Jawaharlal Nehru Stadium (Delhi).
      Jawaharlal Nehru Stadium is a multi-sports stadium located in New Delhi, India.
      It is named after the first Prime Minister of India. Primarily a venue for
      football and athletics. We are organizing many sports and entertainment events
      in summer-Camp. tickets and regeneration form are going to be vanish soon.
      So what are you Waiting for hit registration button or grab your sit with tickets.
      gear up! gear up! gear up...!
    `,
    manager:'Adarsh',
    managerEmail:'adi8090808766@gmail.com'
  }
}

const aboutIntroduction =document.getElementById('aboutIntroduction');
aboutIntroduction.innerHTML += `
  <div class="namaste">
      <h2 title="Greeting">Namaste India!</h2>
      <h1 title="Our Program">SAI Organizing The<br>Summer-Camp 2023</h1>
    </div>

    <div class="txt-container">
      <p title="Website Description">
        This is website build for the SIA Summer Camp event at Jawaharlal Nehru Stadium (Delhi).
        Jawaharlal Nehru Stadium is a multi-sports stadium located in New Delhi, India.
        It is named after the first Prime Minister of India. Primarily a venue for
        football and athletics. We are organizing many sports and entertainment events
        in summer-Camp. tickets and regeneration form are going to be vanish soon.
        So what are you Waiting for hit registration button or grab your sit with tickets.
        gear up! gear up! gear up...!
      </p>
    </div>
    <p title="Doubt ??" class="contact">
      If you have further questions about the re-opening event please reach
      out to our volunteer<br><a title="Mail our Manager" href="mailto:adi8090808766@gmail.com">Adarsh</a>
    </p>
`
