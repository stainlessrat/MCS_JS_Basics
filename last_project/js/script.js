const APIKey = '92bf0ae9ae9c1aa00cbfb8edbda92538';
const city = 'Москва';
const form = document.forms[0];
let  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
let xhr = new XMLHttpRequest();//сформировали запрос
xhr.open('GET', url, false);//настроили запрос
xhr.send(); //отправили запрос
let personName = document.querySelector('.personName');
let icon = document.querySelector('.icon');

class Person {
    constructor(name){
        this.name = name;
        this.happiness = 0;
    }
    hasCat(){
        return this.happiness++;
    }
    hasRest(){
        return this.happiness++;
    }
    hasMoney(){
        return this.happiness++;
    }
    isSunny(temp){
        if(temp > 15){
            return this.happiness++;
        }else {
            return this.happiness;
        }
    }
}

form.onsubmit = function (e) {
    e.preventDefault();//отменяет действие по умолчанию... отправку на сервер и перезагрузку страницы
    let nameUser = document.getElementsByName('name');
    let cat = document.getElementsByName('cat');
    let rest = document.getElementsByName('rest');
    let money = document.getElementsByName('money');

    const myPerson = new Person(nameUser);

    if(cat[0].checked == true){
        myPerson.hasCat();
    }
    if(rest[0].checked == true){
        myPerson.hasRest();
    }
    if(money[0].checked == true){
        myPerson.hasMoney();
    }

    if(xhr.status != 200){
        console.log(xhr.status + ' ' + xhr.statusText);//узнать статус запроса - если не 200, то выводит ошибку
    }else{
        let DATA = JSON.parse(xhr.responseText);//преобразовать в объект

        myPerson.isSunny(Math.floor(DATA.main.temp - 273));
    }
    personName.innerHTML = myPerson.name[0].value;

    if(myPerson.happiness == 4){
        icon.innerHTML = ':-)';
    }else if(myPerson.happiness < 2){
        icon.innerHTML = ':-(';
    }else {
        icon.innerHTML = ':-|';
    }
};