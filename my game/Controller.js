document.body.addEventListener("keydown", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=5
      if (a.key === 'ArrowUp')
      speedY=-5
      if (a.key === 'ArrowLeft'){
      speedX=-5
      car.style.transform="rotate("+ -10 + "deg)";
      }
        if (a.key === 'ArrowRight'){
        speedX=5
        car.style.transform="rotate("+ 10 + "deg)";
        }
})
document.body.addEventListener("keyup", (a) => {//управление с клавиатуры главной машинкой
    if (a.key === 'ArrowDown')
    speedY=0
    
     if (a.key === 'ArrowUp')
     speedY=0
     if (a.key === 'ArrowLeft'){
     speedX=0
     car.style.transform="rotate("+ 0 + "deg)";
     }
       if (a.key === 'ArrowRight'){
       car.style.transform="rotate("+ 0 + "deg)";
       }
       speedX=0
  })

//управление Touch с планшета или телефона
let left= document.querySelector(".left")
let right= document.querySelector(".right")
left.addEventListener('touchstart', leftt )
left.addEventListener('touchend', stop);
right.addEventListener('touchstart',rightt)
right.addEventListener('touchend', stop);
function leftt(EO) {
  speedX=-5
  car.style.transform="rotate("+ -10 + "deg)";
  EO.preventDefault();
}
function rightt(EO) {
  speedX=5
  car.style.transform="rotate("+ 10 + "deg)";
  EO.preventDefault();
}
function stop() {
  speedX=0;
  car.style.transform="rotate("+ 0 + "deg)";
}
//touchmove
var touchStart = null; //Точка начала касания
var touchPosition = null; //Текущая позиция

//Перехватываем события
treck.addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
treck.addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
treck.addEventListener("touchend", function (e) { TouchEnd(e); });//Пользователь отпустил экран

function TouchStart(e)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
}
function TouchMove(e)
{
touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };//Получаем новую позицию
}
function TouchEnd(e)
{
    CheckAction(); //Определяем, какой жест совершил пользователь
    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
}
function CheckAction()
{
    var ddd = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
   	 x: touchStart.x - touchPosition.x,
    };
    let go=document.querySelector(".go")
   		 if(ddd.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
   		 {     
             go.play()
   		 }
   		 else //Иначе он двигал им слева направо
   		 { 
           //какой-то код
        }
}
