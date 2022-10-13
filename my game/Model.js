'use strict'

let vsa=document.getElementById("vsa")//круг машины
let kapot=document.getElementById("kapot")//капот
let lobovoe=document.getElementById("lobovoe")//лобовое стекло
let car_svg=document.querySelector(".car_svg")
car_svg.setAttribute("width","54")

let audio_krash=document.querySelector(".Audio_krash")
let audio_bonus=document.querySelector(".Audio_bonus")
let x=setInterval(tick,40);
let isPaused=false//флаг на паузу таймера
function tick(){
  if(!isPaused){
    y1+=yy;//изменение координаты полос
    topPolosa1+=speedPolosa;//изменение координаты 1 машины
    topPolosa2+=speedPolosa;//изменение координаты 2 машины
    topPolosa3+=speedPolosa;//изменение координаты 3 машины
    topPolosa4+=speedPolosa;//изменение координаты 4 машины
    k++//флаг на запуск машин
    top1+=speedY;//изменение координаты гл. машинки
    left1+=speedX;//изменение координаты гл. машинки
    polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')//движение линий
    polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')//движение линий
    car.style.top=top1+"px";//движение главной машинки 
    car.style.left=left1+"px";//движение главной машинки 
    randomCar.style.top=topPolosa1+"px"//движение 1-ой машинки 
    randomCar.style.left=polosaN+"px"
    if(topPolosa1>570){
      randomCar.style.display="none";
      randomCar.style.top=0;
   randomCar="";//1 машинка
    polosaN.shift();
    randoms =Math.floor(Math.random() * 7);
  randomCar=cars[0];
  randomPolosa=Math.floor(Math.random() * 4);
  polosaN.push(polosa[randomPolosa])
  topPolosa1=-110
  randomCar.style.display="block";
  randomCar.style.left=polosaN+"px"
  randomCar.style.top=topPolosa1+"px"
    }//движение 1-ой машинки 

    if(k>40){//движение 2-ой машинки 
      randomCar2.style.top=topPolosa2+"px"
    randomCar2.style.left=polosaN2+"px"
    }
    if(topPolosa2>570){
      randomCar2.style.display="none";
      randomCar2.style.top=0;
   randomCar2="";//2 машинка
    polosaN2.shift();
  randomCar2=cars[1];
  randomPolosa2=Math.floor(Math.random() * 4);
  polosaN2.push(polosa[randomPolosa2])
  topPolosa2=-110
  randomCar2.style.display="block";
  randomCar2.style.left=polosaN2+"px"
  randomCar2.style.top=topPolosa2+"px"
    }//движение 2-ой машинки 

    if(k>50){//движение 3-ой машинки 
      randomCar3.style.top=topPolosa3+"px"
    randomCar3.style.left=polosaN3+"px"
    }
    if(topPolosa3>570){
      randomCar3.style.display="none";
      randomCar3.style.top=0;
   randomCar3="";//3 машинка
    polosaN3.shift();
  randomCar3=cars[2];
  randomPolosa3=Math.floor(Math.random() * 4);
  polosaN3.push(polosa[randomPolosa3])
  topPolosa3=-110
  randomCar3.style.display="block";
  randomCar3.style.left=polosaN3+"px"
  randomCar3.style.top=topPolosa3+"px"
    }//движение 3-ой машинки 

    if(k>60){//движение 4-ой машинки или бонуса
      randomCar4.style.top=topPolosa4+"px"
    randomCar4.style.left=polosaN4+"px"
    }
    if(topPolosa4>570){
      randomCar4.style.display="none";
      randomCar4.style.top=0;
   randomCar4="";//4 машинка или бонус
    polosaN4.shift();
    randomCarz=Math.floor(Math.random() * 2);
    randomCar4=randomCar44[randomCarz]
    randomPolosa4=Math.floor(Math.random() * 4);
  polosaN4.push(polosa[randomPolosa4])
  topPolosa4=-110
  randomCar4.style.display="block";
  randomCar4.style.left=polosaN4+"px"
  randomCar4.style.top=topPolosa4+"px"
    }//движение 4-ой машинки или бонуса
  
    if(left1<0){//движение машинки до пределов поля
      left1=0
    }
    if(left1>350-54){
      left1=350-54
    }
    if(top1>445){
      top1=445
    }
    if(top1<0){
      top1=0
    }//движение машинки до пределов поля
    //столкновения
    if(top1+80>=topPolosa1&&top1<=topPolosa1+100 && left1+54>=polosaN[0] && left1<=polosaN[0]+52){
      audio_krash.play();
      window.navigator.vibrate(400);
      audio.pause()
      isPaused=true;
      randomCar.style.top=-200+"px"
      randomCar2.style.top=-200+"px"
      randomCar3.style.top=-200+"px"
      randomCar4.style.top=-200+"px"
 heart.value--
      vsa.style.fill="red"//замена одной части цвета
      kapot.style.fill="black"//замена одной части цвета
      lobovoe.style.fill="red"//замена одной части цвета
      car.style.transform="rotate("+ -25+ "deg)";
      randomCar.style.display="none";
      randomCar2.style.display="none";
      randomCar3.style.display="none";
      randomCar4.style.display="none";
      igra=2
          }
    if(top1+80>=topPolosa2&&top1<=topPolosa2+100 && left1+54>=polosaN2[0] && left1<=polosaN2[0]+52){
      audio_krash.play();
      window.navigator.vibrate(400);
      audio.pause()
      isPaused=true;
      randomCar.style.top=-200+"px"
      randomCar2.style.top=-200+"px"
      randomCar3.style.top=-200+"px"
      randomCar4.style.top=-200+"px"
 heart.value--
 vsa.style.fill="red"//замена одной части цвета
 kapot.style.fill="black"//замена одной части цвета
 lobovoe.style.fill="red"//замена одной части цвета
      car.style.transform="rotate("+ -25+ "deg)";
      randomCar.style.display="none";
      randomCar2.style.display="none";
      randomCar3.style.display="none";
      randomCar4.style.display="none";
      igra=2
          }
    if(top1+80>=topPolosa3&&top1<=topPolosa3+100 && left1+54>=polosaN3[0] && left1<=polosaN3[0]+52){
      audio_krash.play();
      window.navigator.vibrate(400);
      audio.pause()
      isPaused=true;
      randomCar.style.top=-200+"px"
      randomCar2.style.top=-200+"px"
      randomCar3.style.top=-200+"px"
      randomCar4.style.top=-200+"px"
 heart.value--
 vsa.style.fill="red"//замена одной части цвета
 kapot.style.fill="black"//замена одной части цвета
 lobovoe.style.fill="red"//замена одной части цвета
      car.style.transform="rotate("+ -25+ "deg)";
      randomCar.style.display="none";
      randomCar2.style.display="none";
      randomCar3.style.display="none";
      randomCar4.style.display="none";
      igra=2
          }
    if(top1>=topPolosa4+55&&top1<=topPolosa4+60 && left1+54>=polosaN4[0] && left1<=polosaN4[0]+45 && randomCar4===randomCar44[1] ){
      audio_bonus.play();
      window.navigator.vibrate(400);
      randomCar4.style.display="none";
      point.value++//подсчет очков
          }
    if(top1+80>=topPolosa4&&top1<=topPolosa4+100 && left1+54>=polosaN4[0] && left1<=polosaN4[0]+52&& randomCar4===randomCar44[0]){
      window.navigator.vibrate(400);
      audio_krash.play();
      audio.pause()
      isPaused=true;
      randomCar.style.top=-200+"px"
      randomCar2.style.top=-200+"px"
      randomCar3.style.top=-200+"px"
      randomCar4.style.top=-200+"px"
 heart.value--
 vsa.style.fill="red"//замена одной части цвета
 kapot.style.fill="black"//замена одной части цвета
 lobovoe.style.fill="red"//замена одной части цвета
      car.style.transform="rotate("+ -25+ "deg)";
      randomCar.style.display="none";
      randomCar2.style.display="none";
      randomCar3.style.display="none";
      randomCar4.style.display="none";
      igra=2
          }
        
        if(igra===2||igra===0)
          start2.setAttribute("disabled",true)
        else
          start2.removeAttribute("disabled");

          if(igra===1||igra===0)
          start1.setAttribute("disabled",true)
        else
          start1.removeAttribute("disabled");

          if(igra===1||igra===2)
          start.setAttribute("disabled",true)
        else
          start.removeAttribute("disabled");

          let inputName=document.querySelector(".inputName")
          let names=document.querySelector(".names")
          if(heart.value==='0'){
            
            names.style.display="block"
            inputName.focus();
          }
        }
        }
let start2= document.querySelector(".button2")
        start2.addEventListener("click",fi)
        function fi(){
          if(!isPaused){
            isPaused = true;
            audio.pause()
          } else {
            isPaused = false;
            audio.play()
        }
        };
       
//сохранение результата игры
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var updatePassword;
  var stringName='MARGAEV_RACING_RECORDS';

  let getNamePlayer= document.querySelector(".getNamePlayer")
  getNamePlayer.addEventListener("click",kk)
function kk(){
    storeInfo()
}
  function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
      url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'LOCKGET', n : stringName, p : updatePassword },
        success : lockGetReady, error : errorHandler
      }
    );
  }
  let inputName=document.querySelector(".inputName")
  function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
      alert(callresult.error); 
    else {
    let result =(JSON.parse(callresult.result))
      result.unshift({name:inputName.value, record: point.value});
console.log(result)
      $.ajax( {
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'UPDATE', n : stringName, v : JSON.stringify(result), p : updatePassword },
        success : updateReady, error : errorHandler
        }
      );
    }
  }
  function updateReady(callresult) {
    if ( callresult.error!=undefined )
      console.log(callresult.error); 
  }
  function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
  }


