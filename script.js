const HamburgMenu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-items');
const closeIcon = document.querySelector('.fa-x');

const HamburgMenuBar = () => {
  navLinks.classList.toggle('active');
};
HamburgMenu.addEventListener('click', HamburgMenuBar);

closeIcon.addEventListener('click', HamburgMenuBar);

