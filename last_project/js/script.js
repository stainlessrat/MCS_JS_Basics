const APIKey = '92bf0ae9ae9c1aa00cbfb8edbda92538';//ключ API
const city = 'Москва';//город
const form = document.forms[0]; //получаем код формы
let  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey; // формируем URL
let xhr = new XMLHttpRequest();//сформировали запрос
xhr.open('GET', url, false);//настроили запрос
xhr.send(); //отправили запрос
//получить код для вывода данных
let personName = document.querySelector('.personName');
let icon = document.querySelector('.icon');

//класс Person
class Person {
    constructor(name){
        this.name = name; //поле имени персоны
        this.happiness = 0;//счетчик счвстья ;-)
    }
    //методы увеличения счетчика в зависимости от выбраных радиокнопок
    hasCat(){
        return this.happiness++;
    }
    hasRest(){
        return this.happiness++;
    }
    hasMoney(){
        return this.happiness++;
    }
    //увеличение счетчика в зависимости от температуры
    isSunny(temp){
        if(temp > 15){
            return this.happiness++;
        }else {
            return this.happiness;
        }
    }
}

//обработка нажатия кнопки
form.onsubmit = function (e) {
    e.preventDefault();//отменяет действие по умолчанию... отправку на сервер и перезагрузку страницы
    let nameUser = document.getElementsByName('name'); //получаем имя из инпута
    //получаем радоикнопки
    let cat = document.getElementsByName('cat');
    let rest = document.getElementsByName('rest');
    let money = document.getElementsByName('money');

    //создаем экземпляр класа
    const myPerson = new Person(nameUser);

    //вызываем методы если выбрана радиокнопка ДА
    if(cat[0].checked == true){
        myPerson.hasCat();
    }
    if(rest[0].checked == true){
        myPerson.hasRest();
    }
    if(money[0].checked == true){
        myPerson.hasMoney();
    }

    //обрабатываем запрос на погоду
    if(xhr.status != 200){
        console.log(xhr.status + ' ' + xhr.statusText);//узнать статус запроса - если не 200, то выводит ошибку
    }else{
        let DATA = JSON.parse(xhr.responseText);//преобразовать в объект

        myPerson.isSunny(Math.floor(DATA.main.temp - 273));//расчитываем зависимость счастья от температуры
    }
    personName.innerHTML = myPerson.name[0].value;//выводим имя в поле для вывода

    //выводим иконки в зависимости от счетчика счастья
    if(myPerson.happiness == 4){
        icon.innerHTML = '<img src=\'https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/146/grinning-face-with-smiling-eyes_1f601.png\'/>';
    }else if(myPerson.happiness < 2){
        icon.innerHTML = '<img src=\'https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/146/white-frowning-face_2639.png\'/>';
    }else {
        console.log(icon.style.backgroundImage);
        icon.innerHTML = '<img src=\'https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/146/neutral-face_1f610.png\'/>';
    }
};