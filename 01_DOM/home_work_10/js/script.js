console.log('You are at ' + window.location);

let names = [
    [
        ['куры', 'гуси', 'павлины'],
        ['сокол', 'орел', 'соловей']
    ],
    [
        ['собака', 'кошка'],
        ['обезьяна', 'рысь']
    ]
];
for(let i = 0; i < names.length; i++){
    for (let j = 0; j < names[i].length; j++){
        for(name of names[i][j]){
            console.log(name);
        }
    }
}
