document.addEventListener("DOMContentLoaded",getData);// загрузка страницы
function randomDiap(n,m) {
    return Math.floor(
      Math.random()*(m-n+1)
      )+n;
  }
  let nambers=randomDiap(1,12)
const startApi = "https://api.unsplash.com/search/photos?query=";
const endApi = "&client_id=8RtTC2PmpVVf2-WdRrUNhwYNgGs2pGfpXWLLxhp3ORU";
const page = "&page=1&per_page=20";  //params - первыя партия из 12 картинок
let inquiry = "";
async function getData() {
  inquiry = 'car';  
  if (!inquiry) return;
  let url = startApi + inquiry + page + endApi;// склейка запроса к api
    const result = await fetch(url); //отправка запроса к api
    const data = await result.json();// получение хэша картинок
    showData(data.results);
  }
  function showData(array) {
    homeId.innerHTML = ""; // стирается содержимое контейнера с классом homeId
      const div = document.createElement("div");// создается div
      div.classList.add("gallery__item"); //div присваевается class "gallery__item"
      homeId.appendChild(div);//добавляет div в конец списка дочерних элементов указанного родительского div.
      div.appendChild(insertImg(array[randomDiap(0,19)]));// в этот div добавляется рандомная картинка.<== Запуск функции
  }
  function insertImg(object) {
    const img = document.createElement("img");// добавление тега img
    img.src = `${object.urls.regular}`; // вставка картинки из хэша по ключу "urls"  и значению  "regular"
    img.alt = `image`; // вставка тега alt со значением image
    return img; // возврат картинок
  }
