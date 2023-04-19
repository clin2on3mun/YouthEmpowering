const HamburgMenu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-items');
const closeIcon = document.querySelector('.fa-x');
const card = document.querySelector('.feature-card');

HamburgMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

const featureSpeakers = [{
  id: 1,
  imagesSrc: 'images/minister-of-youth -2.jpg',
  speakerName: 'Rose Mary Mbabazi',
  speakerInfo: 'Minister of youth in Rwanda',
  speakerBio: 'Mbabazi holds a bachelor\'s degree in Education, obtained from Makerere University, in Kampala, Uganda',
},
{
  id: 2,
  imagesSrc: 'images/online_UN_volunteer_Felix_YALI.png',
  speakerName: 'Felix YALI',
  speakerInfo: 'online UN volunteer from Ivory Coast',
  speakerBio: 'for past 3 year working with UN in UNICEF and UNHCR',
},
{
  id: 3,
  imagesSrc: 'images/youth leader 2.jpg',
  speakerName: 'Tumaini Johnson',
  speakerInfo: 'Minister of youth from Tanzania',
  speakerBio: 'Johnson has a bachelor \'s degree in Social Science, obtained in University of Tanzania',
},

{
  id: 4,
  imagesSrc: 'images/youth Leader.jpg',
  speakerName: 'Kenyi John',
  speakerInfo: 'Minister of youth from South Sudan',
  speakerBio: 'John has a bachelor \'s degree in IT , obtained in University of England',
},

{
  id: 5,
  imagesSrc: 'images/youthLeader.jpg',
  speakerName: 'Oluwatoyosi Ogunseye',
  speakerInfo: 'African Journalist',
  speakerBio: 'Oluwatoyosi has received 25 awards including the CNN MultiChoice African Journalist of the Year Award ',
},
{
  id: 6,
  imagesSrc: 'images/prisca.jpg',
  speakerName: 'Prisca Daka',
  speakerInfo: 'African activist',
  speakerBio: ' Prisca is a regional coordinator for Global Youth Biodiversity Network (GYBN) Africa ',
},
];

const featureSpeaker = () => {
  card.innerHTML = featureSpeakers.map((x) => `<section class="feature-speaker-card">  
        <div class="images">
          <img src="${x.imagesSrc}">
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
