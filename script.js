const HamburgMenu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-items');
const closeIcon = document.querySelector('.fa-x');
const card = document.querySelector('.feature-card');

const HamburgMenuBar = () => {
  navLinks.classList.toggle('active');
};
HamburgMenu.addEventListener('click', HamburgMenuBar);

closeIcon.addEventListener('click', HamburgMenuBar);

const featureSpeakers = [{
  id: 1,
  imagesSrc: 'images/minister-of-youth -2.jpg',
  alt: 'minister-of-youth',
  speakerName: 'Rose Mary Mbabazi',
  speakerInfo: 'Minister of youth in Rwanda',
  speakerBio: 'Mbabazi holds a bachelor\'s degree in Education, obtained from Makerere University, in Kampala, Uganda',
},
{
  id: 2,
  imagesSrc: 'images/online_UN_volunteer_Felix_YALI.png',
  alt: 'Felix YALI',
  speakerName: 'Felix YALI',
  speakerInfo: 'online UN volunteer from Ivory Coast',
  speakerBio: 'for past 3 year working with UN in UNICEF and UNHCR',
},
{
  id: 3,
  imagesSrc: 'images/youth leader 2.jpg',
  alt: 'Tumaini Johnson',
  speakerName: 'Tumaini Johnson',
  speakerInfo: 'Minister of youth from Tanzania',
  speakerBio: 'Johnson has a bachelor \'s degree in Social Science, obtained in University of Tanzania',
},

{
  id: 4,
  imagesSrc: 'images/youth Leader.jpg',
  alt: 'Kenyi John',
  speakerName: 'Kenyi John',
  speakerInfo: 'Minister of youth from South Sudan',
  speakerBio: 'John has a bachelor \'s degree in IT , obtained in University of England',
},

{
  id: 5,
  imagesSrc: 'images/youthLeader.jpg',
  alt: 'Oluwatoyosi Ogunseye',
  speakerName: 'Oluwatoyosi Ogunseye',
  speakerInfo: 'African Journalist',
  speakerBio: 'Oluwatoyosi has received 25 awards including the CNN MultiChoice African Journalist of the Year Award ',
},
{
  id: 6,
  imagesSrc: 'images/prisca.jpg',
  alt: 'Prisca Daka',
  speakerName: 'Prisca Daka',
  speakerInfo: 'African activist',
  speakerBio: ' Prisca is a regional coordinator for Global Youth Biodiversity Network (GYBN) Africa ',
},
];

const featureSpeaker = () => {
  card.innerHTML = featureSpeakers.map((x) => `<section class="feature-speaker-card">  
        <div class="images">
          <img src="${x.imagesSrc}" alt="${x.alt}">
        </div>
        <div class="speaker-details">
           <h3 class="speaker-name">${x.speakerName}</h3>
           <span class="speaker-info">${x.speakerInfo}</span>
           <hr>
           <p class="speaker-experience">${x.speakerBio}</p>
        </div>
      </section>`).join('');
};

featureSpeaker();
