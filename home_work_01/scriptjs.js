let money = Number(prompt('Сколко у вас с собой денег?'));
let apple = Number(prompt('Сколько вы купили яблок?'));
let bread = Number(prompt('Сколько вы купили батонов хлеба?'));
let priceApple = Number(prompt('Сколько стоит одно яблоко?'));
let valApple = apple * priceApple;
let priceBread = Number(prompt('Сколько стоит один батон?'));
let valBread = bread * priceBread;
let result = money - (valApple + valBread);
if(result >= 0){
    document.write(true);
} else {
    document.write(false);
}
