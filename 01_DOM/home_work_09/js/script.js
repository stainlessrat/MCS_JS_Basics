let myDiv = document.querySelector('div');
let number = 100000;

for(let i = 0; i < number; i++){
    let result = (i+1)%6;
    if(result == 0){
        myDiv.innerHTML += '<p>' + (i+1) + '</p>';
    }
}
