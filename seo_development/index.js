const hamburger = document.querySelector('.hamburger');
const div= document.querySelector('.div')

hamburger.addEventListener('click', toggleMenu);

const subnav_content1= document.querySelector(".subnav-content1")
const subnav1= document.querySelector(".subnav1")


function toggleMenu() {
  hamburger.classList.toggle('open');
  div.classList.toggle('open')
  
}
subnav1.addEventListener('click', www)
function www(){
  subnav_content1.classList.toggle("open")
}