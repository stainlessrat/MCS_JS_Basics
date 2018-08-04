//const form = document.querySelector('form');
//const form = document.forms[0].elements.quantility; - добраться до элемента по атребуту имени имени
const form = document.forms[0]
const insert = document.querySelector('.total');

form.onsubmit = function (e) {
    e.preventDefault();//отменяет действие по умолчанию... отправку на сервер и перезагрузку страницы
    insert.innerHTML = form.elements.quantility.value * form.elements.price.value;
}