let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamien';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nozyce';
} else {
    console.log ('zle dzila random,bo liczba ' + randomNumber + ' poza zakresem od 1 do 3');
}

console.log('Computer wpisał: ' + computerMove);

let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamien';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nozyce';
} else {
    printMessage ('zle podales liczbe,bo liczba ' + playerInput + ' poza zakresem od 1 do 3');
}

console.log('Gracz wpisał: ' + playerMove);

// kodillaCode__________

// printMessage('Human chose: ' + playerMove);
// printMessage('Robot chose: ' + computerMove);

// if(computerMove == 'kamien' && playerMove == 'papier'){
//     printMessage('Human WIN');
// } else if(computerMove == 'papier' && playerMove == 'kamien'){
//     printMessage('Robot WIN');
// } else if(computerMove == 'nozyce' && playerMove == 'kamien'){
//     printMessage('Human WIN');
// } else if(computerMove == 'kamien' && playerMove == 'nozyce'){
//     printMessage('Robot WIN');
// } else if(computerMove == 'papier' && playerMove == 'nozyce'){
//     printMessage('Human WIN'); 
// } else if(computerMove == 'nozyce' && playerMove == 'papier'){
//     printMessage('Robot WIN');
// } else if(computerMove == playerMove){
//     printMessage('Draw');
// }

// myCode_________

printMessage('Human chose: ' + playerMove);
printMessage('Robot chose: ' + computerMove);

if((computerMove == 'kamien' && playerMove == 'papier') || (computerMove == 'nozyce' && playerMove == 'kamien') || (computerMove == 'papier' && playerMove == 'nozyce')){
    printMessage('Human WIN');
} else if((computerMove == 'papier' && playerMove == 'kamien') || (computerMove == 'kamien' && playerMove == 'nozyce') || (computerMove == 'nozyce' && playerMove == 'papier')){
    printMessage('Robot WIN');
} else if(computerMove == playerMove){
    printMessage('Draw');
}

// anotherOneCode

// if (randomNumber > playerInput){

// } else if(randomNumber < playerInput){

// } else if(randomNumber = playerInput){

// }
