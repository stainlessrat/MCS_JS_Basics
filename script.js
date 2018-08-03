let number = parseFloat(prompt('Введите число'));
let randomNumber = Math.floor(Math.random()*9+1);
console.log(number);
console.log(randomNumber);
let result = Math.abs(number**randomNumber);
console.log(result);