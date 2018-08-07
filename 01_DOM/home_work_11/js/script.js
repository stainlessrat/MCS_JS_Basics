let crypto = [
    {
        name : "Bitcoin",
        price: 1388.37
    },
    {
        name : "Ethereum",
        price: 716
    },
    {
        name : "Litecoin",
        price: 140
    }
];

let header = document.querySelectorAll('h2');
console.log(header);
let par = document.querySelectorAll('p');
console.log(par);
let div = document.querySelectorAll('div');
console.log(div);

for(let i = 0; i < crypto.length; i++){
    console.log(crypto[i]);
    header[i].innerHTML = crypto[i].name;
    par[i].innerHTML = crypto[i].price;
    div[i].style.width = (crypto[i].price)/1.5 + 'px';
}
