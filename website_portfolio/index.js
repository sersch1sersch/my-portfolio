import i18Obj from "./translate.js";



const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav_list.classList.toggle('open');
}
function closeNav(event) {
  if (event.target.classList.contains('nav-link')) {  
    hamburger.classList.remove('open');
    nav_list.classList.remove('open');
}
}

hamburger.addEventListener('click', toggleMenu);
nav_list.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', closeNav);
nav_list.addEventListener('click', closeNav);


const portfolioImages = document.querySelectorAll('.portfolio_foto_title img');

const portfolio_btn = document.querySelectorAll('.portfolio_search_form_submit1');



 portfolio_btn.forEach(function (btnPortfolio) {
  btnPortfolio.addEventListener('click', function () {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${btnPortfolio.dataset.i18}/${index + 1}.jpg`);
    portfolio_btn.forEach((item) => {
          item.classList.remove('open');
      })
      btnPortfolio.classList.add('open');
  });
})




const section_button_form_item = document.querySelector('.section_button_form_item');
function form_contact() {
  alert('ОТПРАВКА FORM В РАЗРАБОТКЕ');
} 
section_button_form_item.addEventListener('click', form_contact);





function getTranslate(lang) {
  const datasetElements = document.querySelectorAll('[data-i18]');  
  datasetElements.forEach((element) => {
    if (element.placeholder) {
      element.placeholder = i18Obj[lang][element.getAttribute('data-i18')];
      element.textContent = ''
    } else {
      element.textContent = i18Obj[lang][element.getAttribute('data-i18')];
    }
  });
};


document.querySelectorAll('.eng')[0].addEventListener('click', getTranslate.bind(this, 'en'));
document.querySelectorAll('.ru')[0].addEventListener('click', getTranslate.bind(this, 'ru'));

document.querySelectorAll('.eng')[0].addEventListener('click', switchToEng);
document.querySelectorAll('.ru')[0].addEventListener('click', switchToRu);

function switchToRu(event) {
  document.querySelector('.eng').classList.remove('active');
  document.querySelector('.ru').classList.add('active');
  lang = 'ru';
}

function switchToEng(event) {
  document.querySelector('.ru').classList.remove('active');
  document.querySelector('.eng').classList.add('active');
  lang = 'en';
}


document.querySelectorAll('.light')[0].addEventListener('click', theme);

function theme() {
const themePortfolio = document.querySelectorAll('.theme');
themePortfolio.forEach((x) =>{
  x.classList.toggle('white');
});
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
}

function setLocStor() {
  locStor.setItem('lang', lang);
  locStor.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocStor)

function getLocStor() {
  if(locStor.getItem('lang')) {
    const lang = locStor.getItem('lang');
    getTranslate(lang);
    if (lang === 'ru') {
      switchToRu();
    }
  }
  if(locStor.getItem('theme')) {
    const theme = locStor.getItem('theme');
    if (theme === 'light') {
      switchTheme();
    }
  }
}
window.addEventListener('load', getLocStor)

