let money = Number(prompt('Сколко у вас с собой денег?'));
let apple = Number(prompt('Сколько вы купили яблок?'));
let bread = Number(prompt('Сколько вы купили батонов хлеба?'));
let priceApple = Number(prompt('Сколько стоит одно яблоко?'));
let priceBread = Number(prompt('Сколько стоит один батон?'));


function haveEnough(myMoney, countApple, countBread, price_one, price_two) {
    let valApple = countApple * price_one;
    let valBread = countBread * price_two;
    let result = myMoney - (valApple + valBread);
    if(result >= 0){
        document.write('Вам хватает денег');
    } else {
        document.write('Вам не хватает денег');
    }
}

haveEnough(money, apple, bread, priceApple, priceBread);
