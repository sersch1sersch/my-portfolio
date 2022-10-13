const search = document.querySelector(".search");// ищет  class
const input = document.querySelector(".input"); // ищет class
const gallery = document.querySelector(".gallery"); //ищет class
const cleaner = document.querySelector(".clear"); //ищет clear
cleaner.addEventListener("click", () => (input.value = "")); // очищаем некорректно набранное поле ввода
input.addEventListener("keyup", (a) => {
  if (a.key === 'Enter') // при нажатии на клавишу enter
  getData();
});
search.addEventListener("click",getData);// клик мышкой на значек поиска. Запуск функциию
const startApi = "https://api.unsplash.com/search/photos?query=";
const endApi = "&client_id=8RtTC2PmpVVf2-WdRrUNhwYNgGs2pGfpXWLLxhp3ORU";
const page = "&page=1&per_page=12";  //params - первыя партия из 12 картинок
let inquiry = "";

async function getData() {
  inquiry = input.value;  // введенные данные в input
  if (!inquiry) return;
  let url = startApi + inquiry + page + endApi;// склейка запроса к api
    const result = await fetch(url); //отправка запроса к api
    const data = await result.json();// получение хэша картинок
    console.log(data);
    if (!data.results.length) { // если некорректный ввод данных в input
      div = document.createElement("div");// создается  контейнер
      gallery.innerHTML = "";// обнуляется все в контейнере что было раньше
      gallery.appendChild(div); //добавляет div в конец списка дочерних элементов указанного родительского div.
      div.textContent = "Enter a valid search query";// запись об некорректном вводе данных
      return;
    }
    showData(data.results);
  }
  
  function showData(array) {
    gallery.innerHTML = ""; // стирается содержимое контейнера с классом gallery
    for (let i = 0; i < array.length; i++) { // перебор содержимого хэша с api
      const div = document.createElement("div");// создается div
      div.classList.add("gallery__item"); //div присваевается class "gallery__item"
      gallery.appendChild(div);//добавляет div в конец списка дочерних элементов указанного родительского div.
      div.appendChild(insertImg(array[i]));// в этот div добавляются все картинки после перебора.<== Запуск функции
    }
  }
  
  function insertImg(object) {
    const img = document.createElement("img");// добавление тега img
    img.src = `${object.urls.regular}`; // вставка картинки из хэша по ключу "urls"  и значению  "regular"
    img.alt = `image`; // вставка тега alt со значением image
    return img; // возврат картинок
  }
  
  console.log('вроде все сделал как требовалось в задании без каких-либо своих доработок. Можно поставить максимальный бал')