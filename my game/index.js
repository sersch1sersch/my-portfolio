 window.onload = function () {
        setTimeout(function () {
            document.getElementsByTagName("body")[0].style.visibility = "visible";
        }, 500);
    }

let start= document.querySelector(".button")
let start1= document.querySelector(".button1")
let treck= document.querySelector(".treck")
let polyline1= document.querySelector(".polyline1")
let polyline2= document.querySelector(".polyline2")
let line1= document.querySelector(".line1")
let point=document.querySelector(".point")
let heart=document.querySelector(".heart-point")
let car= document.querySelector(".car")// главная машинка
let audio=document.querySelector(".Audio")
let car1=document.querySelector(".automotive")
let car2=document.querySelector(".convertible")
let car3=document.querySelector(".delahaye")
let car4=document.querySelector(".mini-cooper")
let car5=document.querySelector(".police")
let car6=document.querySelector(".sports")
let car7=document.querySelector(".bus")
let car8 =document.querySelector(".pngwing")
let cars=[car1,car2,car3,car4,car8,car5,car6,car7];//масив машинок
heart.value=3//жизни
point.value=0;//очки
let randomCar=[];
let automotive={// размеры машин
  width:50,
   height:100,
}
automotive=car1;
let convertible={
  width:55,
   height:100,
}
let delahaye={
  width:48,
   height:100,
}
let mini_cooper={
  width:52,
   height:106,
}
let police={
  width:52,
   height:100,
}
let sports={
  width:53,
   height:101,
}
let bus={
  width:53,
   height:101,
}
let pngwing={
  width:45,
     height:60
}// размеры машин

let randoms;//генерация чисел
let igra=0;// игра не начата
randomCarY=0;
speedY=0;//скорость гл. машины
yy=0;//изменение скорости полос
y1=-1000000;//координата полос
speedX=0;//скорость гл. машины
top1=410;//координата гл. машины
left1=147;;//координата гл. машины
speedPolosa=0;//скорость машин
let topPolosa1=-110//начальная координата 1 машинки
let topPolosa2=-260//начальная координата 2 машинки
let topPolosa3=-420//начальная координата 3 машинки
let topPolosa4=-580//начальная координата 4 машинки или бонуса
polosa1={//хэш из свойств машин
  topPolosa:-110,
  leftPolosa:15,
  speedPolosa:0
}
polosa2={
  topPolosa:-110,
  leftPolosa:105,
  speedPolosa:4
}
polosa3={
  topPolosa:-110,
  leftPolosa:192,
  speedPolosa:4
}
polosa4={
  topPolosa:-110,
  leftPolosa:279,
  speedPolosa:4
}
let reboot=false;//флаг нажата ли кнопка
let polosaN=[];
let polosa=[polosa1.leftPolosa,polosa2.leftPolosa,polosa3.leftPolosa,polosa4.leftPolosa,]
start.addEventListener("click",startgame);//старт игры
function startgame(){
  reboot=true
if(igra===0){
 audio.play()//запуск музыки
igra=1;//флаг игра началась
yy=7//скорость полос
speedPolosa=7//увеличение скорости машин
topPolosa1=-110//координаты машин
topPolosa2=-260//координаты машин
topPolosa3=-420//координаты машин
topPolosa4=-580//координаты машин
}
}
start1.addEventListener("click",rr)
   function rr(){
    audio.play()
     igra=1
     vsa.style.fill="url(#radial0)"//замена одной части цвета
 kapot.style.fill="rgb(96.862745%,80.784314%,0%)"//замена одной части цвета
 lobovoe.style.fill="url(#radial3)"//замена одной части цвета
   car.style.transform="rotate("+ 0+ "deg)";
     setTimeout(tick1,3000);
    function tick1(){
      topPolosa1=-110
  topPolosa2=-260
  topPolosa3=-420
  topPolosa4=-580
  randomCar.style.display="block";
        randomCar2.style.display="block";
        randomCar3.style.display="block";
        randomCar4.style.display="block";
      isPaused=false
    }
   }
 
polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')
polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')

let randomCar4=[]
let randomCar44=[car4,car8];
let randomPolosa4;
let polosaN4=[]
randomCarz=Math.floor(Math.random() * 2);
randomCar4=randomCar44[randomCarz]
randomPolosa4=Math.floor(Math.random() * 4);
polosaN4.push(polosa[randomPolosa4])

let randomCar2;
let randomPolosa2;
let polosaN2=[]
let randomCar3;
let randomPolosa3;
let polosaN3=[]
randomCar2=cars[1];
randomPolosa2=Math.floor(Math.random() * 4);
polosaN2.push(polosa[randomPolosa2])
randomCar3=cars[2];
randomPolosa3=Math.floor(Math.random() * 4);
polosaN3.push(polosa[randomPolosa3])
randomCar=cars[0];
randomPolosa=Math.floor(Math.random() * 4);
polosaN.push(polosa[randomPolosa])

let k=0//счетчик

window.onbeforeunload=unload;//проверка на перезагрузку
function unload(EO) {
  EO=EO||window.event;
  if(reboot===true){
  EO.returnValue='После перезагрузка ваши данные не сохраняться ';}
};
let names=document.querySelector(".names")
function reloads(){
  names.style.display="none"
  igra=0;
  reboot=false;
  randomCarY=0;
  speedY=0;
  yy=0;
  y1=-1000000;
  speedX=0;
  top1=410;
  left1=147;
  
  speedPolosa=0;
  point.value=0;
  heart.value=3
  
   vsa.style.fill="url(#radial0)"//замена одной части цвета
   kapot.style.fill="rgb(96.862745%,80.784314%,0%)"//замена одной части цвета
   lobovoe.style.fill="url(#radial3)"//замена одной части цвета
     car.style.transform="rotate("+ 0+ "deg)";
     isPaused=false
     topPolosa1=-110
     topPolosa2=-260
     topPolosa3=-420
     topPolosa4=-580
     randomCar.style.display="block";
        randomCar2.style.display="block";
        randomCar3.style.display="block";
        randomCar4.style.display="block";
}

let pravila= document.getElementById("pravila")
let games= document.getElementById("games")
let home= document.getElementById("home")
let rekords= document.getElementById("rekords")
let pravila1= document.getElementById("pravilaId")
let games1= document.getElementById("gamesId")
let home1= document.getElementById("homeId")
let rekords1= document.getElementById("rekordsId")
window.onhashchange=switchToStateFromURLHash;
//SPA
var SPAState={}; 
function switchToStateFromURLHash() {
  var URLHash=window.location.hash;
  var stateJSON=decodeURIComponent(URLHash.substr(1));
  if ( stateJSON!="" )
  SPAState=JSON.parse(stateJSON);
else
  SPAState={pagename:'Main'};
  var pageHTML="";
  switch ( SPAState.pagename ) {
    case 'Main':
home1.style.display="block"
games1.style.display = 'none';
pravila1.style.display = 'none';
rekords1.style.display = 'none';
break;
case 'Game':
  home1.style.display="none"
  games1.style.display = 'block';
  pravila1.style.display = 'none';
  rekords1.style.display = 'none';
      break;
      case 'Rules':
        home1.style.display="none"
        games1.style.display = 'none';
        pravila1.style.display = 'block';
        rekords1.style.display = 'none';
        break;
        case 'Scores':
        home1.style.display="none"
        games1.style.display = 'none';
        pravila1.style.display = 'none';
        rekords1.style.display = 'block';
        restoreInfo()
        break;
  }
}
function switchToState(newState) {
  location.hash=encodeURIComponent(JSON.stringify(newState));
}
home.onclick = function(EO) {
  switchToState( { pagename:'Main' } );
  EO.preventDefault();
}

games.onclick = function(EO) {
  switchToState( { pagename:'Game' } );
  EO.preventDefault();
}

pravila.onclick = function(EO) {
  switchToState( { pagename:'Rules' } );
  EO.preventDefault();
}
rekords.onclick = function(EO) {
  switchToState( { pagename:'Scores' } );
  EO.preventDefault();
}
switchToStateFromURLHash();
//получение рекордов из хранилища
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php"; 
var stringName='MARGAEV_RACING_RECORDS'; 
function restoreInfo() { 
  $.ajax(
    { 
    url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json', 
    data : { f : 'READ', n : stringName }, 
    success : readReady, error : errorHandler 
  } 
  ); 
} 
function readReady(callresult) { 
  if ( callresult.error!=undefined ) 
    console.log(callresult.error); 
  else if ( callresult.result!="" ) { 
    var result=JSON.parse(callresult.result); 
    createRecordTable(rekords1,result); 
  } 
} 
function compareScore(a,b) { 
  return b.record-a.record; 
} 
function createRecordTable(pole,data){
  var pageHTML = ''; 
  data.sort(compareScore); 
  pageHTML += '<p class ="rec"> Рекорды игры </p>';
  pageHTML += "<br>"
  for(var i = 0; i < data.length; i++){ 
    if(i > 9){ 
      break; 
    } 
   pageHTML +=  (i+1) + '. ' + ' ' + data[i].name + ' - ' + ' ' + data[i].record +" "+'очков'; 
   pageHTML+="<br>"
  } 
  
  pole.innerHTML = pageHTML; 
} 
function errorHandler(jqXHR,statusStr,errorStr) { 
  alert(statusStr+' '+errorStr); 
}
