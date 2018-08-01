let myNumber = prompt('Введите любое число');
myNumber = parseInt(myNumber);

if(myNumber >= 0){
    document.write(myNumber);
} else if(myNumber < 0) {
    document.write(-myNumber);
} else {
    document.write('Вы не ввели число');
}