const audio = new Audio();
var myAudio = document.getElementById("myAudio");
const buttonBtn = document.querySelector('.play');
const mainBg = document.querySelector('.main');
const navItem = document.querySelectorAll('.nav-item');
var buttons = document.querySelector('slavka');
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};

myAudio.onpause = function() {
  isPlaying = false;
};

function toggleMenu() {
    buttonBtn.classList.toggle('pause');
}
buttonBtn.addEventListener('click', togglePlay);
buttonBtn.addEventListener('click',toggleMenu);

function changeImageSlavka() {
  mainBg.style.backgroundImage = "url('./assets/img/slavka.jpg')";
  buttonBtn.classList.add('pause');
  navItem[0].classList.remove('active');
  navItem[1].classList.remove('active');
  navItem[2].classList.remove('active');
  navItem[3].classList.remove('active');
  navItem[4].classList.remove('active');
  navItem[5].classList.add('active');
  myAudio.src="./assets/aud/slavka.mp3";
  myAudio.play();
  }
  navItem[5].addEventListener('click', changeImageSlavka);

  function changeImageSolovey() {
  mainBg.style.backgroundImage = "url('./assets/img/solovey.jpg')";
  buttonBtn.classList.add('pause');
  navItem[0].classList.remove('active');
  navItem[5].classList.remove('active');
  navItem[2].classList.remove('active');
  navItem[3].classList.remove('active');
  navItem[4].classList.remove('active');
  navItem[1].classList.add('active');
  myAudio.src="./assets/aud/solovey.mp3";
  myAudio.play();
  }
  navItem[1].addEventListener('click', changeImageSolovey);

  function changeImageDrozd() {
  mainBg.style.backgroundImage = "url('./assets/img/drozd.jpg')";
  buttonBtn.classList.add('pause');
  navItem[0].classList.remove('active');
  navItem[5].classList.remove('active');
  navItem[1].classList.remove('active');
  navItem[3].classList.remove('active');
  navItem[4].classList.remove('active');
  navItem[2].classList.add('active');
  myAudio.src="./assets/aud/drozd.mp3";
  myAudio.play();
  }
  navItem[2].addEventListener('click', changeImageDrozd);

  function changeImageZarynka() {
  mainBg.style.backgroundImage = "url('./assets/img/zarynka.jpg')";
  buttonBtn.classList.add('pause');
  navItem[0].classList.remove('active');
  navItem[5].classList.remove('active');
  navItem[1].classList.remove('active');
  navItem[2].classList.remove('active');
  navItem[4].classList.remove('active');
  navItem[3].classList.add('active');
  myAudio.src="./assets/aud/zarynka.mp3";
  myAudio.play();
  }
  navItem[3].addEventListener('click', changeImageZarynka);

  function changeImageJavoronok() {
  mainBg.style.backgroundImage = "url('./assets/img/javoronok.jpg')";
  buttonBtn.classList.add('pause');
  navItem[0].classList.remove('active');
  navItem[5].classList.remove('active');
  navItem[1].classList.remove('active');
  navItem[2].classList.remove('active');
  navItem[3].classList.remove('active');
  navItem[4].classList.add('active');
  myAudio.src="./assets/aud/javoronok.mp3";
  myAudio.play();
  }
  navItem[4].addEventListener('click', changeImageJavoronok);

  function changeImagForest() {
  mainBg.style.backgroundImage = "url('./assets/img/forest.jpg')";
  buttonBtn.classList.add('pause');
  navItem[4].classList.remove('active');
  navItem[5].classList.remove('active');
  navItem[1].classList.remove('active');
  navItem[2].classList.remove('active');
  navItem[3].classList.remove('active');
  navItem[0].classList.add('active');
  myAudio.src="./assets/aud/forest.mp3";
  myAudio.play();
  }
  navItem[0].addEventListener('click', changeImagForest);