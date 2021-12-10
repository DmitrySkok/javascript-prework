let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nozyce';
} else {
    console.log ('zle dzila random,bo liczba ' + randomNumber + 'poza zakresem od 1 do 3');
}

console.log('Computer wpisał: ' + computerMove);
