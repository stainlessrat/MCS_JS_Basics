let color = prompt('Какой будет фон у страницы?');
const body = document.querySelector('body');
body.style.backgroundColor = color;

let fontColor = prompt('Какой будет цвет текста на странице?');
const pageColor = document.querySelector('.page');
pageColor.style.color = fontColor;

let nameQuist = prompt('Как зовут человека, который вас вдохновляет?');
const nameAnswer = document.querySelector('.name');
nameAnswer.innerText = nameQuist;

let quistPictire = prompt('Введите адрес картинки');
const pictire = document.querySelector('img');
pictire.setAttribute('src', quistPictire);

let quistText = prompt('Введите текст страницы');
const text = document.querySelector('.shortBio');
text.innerText = quistText;

const bio = document.querySelector('.shortBio');
bio.className += ' animated';