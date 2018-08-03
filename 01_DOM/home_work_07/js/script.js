let buttonRequest = document.querySelector('.request');
let divPopup = document.querySelector('.popup');
let closePopup = document.querySelector('.closePopup');
let openMenu = document.querySelector('.openMenu');
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');

buttonRequest.addEventListener('click', function () {
    divPopup.style.display = 'flex';
});

closePopup.addEventListener('click', function () {
    divPopup.style.display = 'none';
});

openMenu.addEventListener('click', function () {
    menu.style.left = 0;
});
closeMenu.addEventListener('click', function () {
    menu.style.left = '-50vw';
});

