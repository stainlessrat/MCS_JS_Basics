const APIKey = '92bf0ae9ae9c1aa00cbfb8edbda92538';
//const city = 'Tenerife';
const insert = document.querySelector('.total');
const wind = document.querySelector('.wind');
const form = document.forms[0];

form.onsubmit = function (e) {
    e.preventDefault();//отменяет действие по умолчанию... отправку на сервер и перезагрузку страницы
    let country = document.getElementsByName('quantility');
    //console.log(country[0].value);
    let  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + country[0].value + '&appid=' + APIKey;

    //надо отправить запрос на сервер
    let xhr = new XMLHttpRequest();//сформировали запрос

    xhr.open('GET', url, false);//настроили запрос
    xhr.send(); //отправили запрос

    if(xhr.status != 200){
        console.log(xhr.status + ' ' + xhr.statusText);//узнать статус запроса - если не 200, то выводит ошибку
    }else{
        var DATA = JSON.parse(xhr.responseText);//преобразовать в объект
        console.log(DATA);//иначе - вывод запроса в косоль
        //document.write(DATA.main.temp - 273);
        insert.innerHTML = Math.floor(DATA.main.temp - 273);
        wind.innerHTML = DATA.wind.speed;

    }
};