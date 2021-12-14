
function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getComputerName(randomNumber);

  function getComputerName(argMoveId) {
    if (argMoveId == 1) {
      return "kamien";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nozyce";
    } else {
      console.log("Nie znam ruchu o id " + argMoveId + ".");
    }
    return "nieznany ruch";
  }
  console.log("Computer wpisał: " + computerMove);
  // let playerInput = prompt(
  //   "Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce."
  // );
  // let playerInput = 2;
  let playerMove = getPlayerMove(playerInput);

  function getPlayerMove(argMoveId) {
    if (argMoveId == 1) {
      return "kamien";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nozyce";
    } else {
      console.log("Nie znam ruchu o id " + argMoveId + ".");
    }
    //   printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
  console.log("Gracz wpisał: " + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == "kamien" && argPlayerMove == "papier") ||
      (argComputerMove == "nozyce" && argPlayerMove == "kamien") ||
      (argComputerMove == "papier" && argPlayerMove == "nozyce")
    ) {
      printMessage('Human WIN');
    } else if (
      (argComputerMove == "papier" && argPlayerMove == "kamien") ||
      (argComputerMove == "kamien" && argPlayerMove == "nozyce") ||
      (argComputerMove == "nozyce" && argPlayerMove == "papier")
    ) {
      printMessage('Robot WIN');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Draw');
    } else {
      printMessage(argComputerMove + " albo " + argPlayerMove + " nie jest poprawno podany.");
    }
  }
  displayResult(computerMove, playerMove);
}

document.getElementById('rock').addEventListener('click', function(){playGame(1)});

document.getElementById('paper').addEventListener('click', function(){playGame(2)});

document.getElementById('scissors').addEventListener('click', function(){playGame(3)});


// let playerInput = prompt("Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.");
// let playerInput = 2;
// let playerMove = getPlayerMove(playerInput);

// function getPlayerMove(argMoveId) {
//   if (argMoveId == 1) {
//     return "kamien";
//   } else if (argMoveId == 2) {
//     return "papier";
//   } else if (argMoveId == 3) {
//     return "nozyce";
//   } else {
//     console.log("Nie znam ruchu o id " + argMoveId + ".");
//   }
//   printMessage("Nie znam ruchu o id " + argMoveId + ".");
//   return "nieznany ruch";
// }
// console.log("Gracz wpisał: " + playerMove);

// function displayResult(argComputerMove, argPlayerMove) {
//   if (
//     (argComputerMove == "kamien" && argPlayerMove == "papier") ||
//     (argComputerMove == "nozyce" && argPlayerMove == "kamien") ||
//     (argComputerMove == "papier" && argPlayerMove == "nozyce")
//   ) {
//     console.log("Human WIN");
//   } else if (
//     (argComputerMove == "papier" && argPlayerMove == "kamien") ||
//     (argComputerMove == "kamien" && argPlayerMove == "nozyce") ||
//     (argComputerMove == "nozyce" && argPlayerMove == "papier")
//   ) {
//     console.log("Robot WIN");
//   } else if (argComputerMove == argPlayerMove) {
//     console.log("Draw");
//   } else {
//     console.log(
//       argComputerMove + " albo " + argPlayerMove + " nie jest poprawno podany."
//     );
//   }
// }

// displayResult(computerMove, playerMove);

// if(randomNumber == 1){
//   computerMove = 'kamien';
// } else if(randomNumber == 2){
//     computerMove = 'papier';
// } else if(randomNumber == 3){
//     computerMove = 'nozyce';
// } else {
//     console.log ('zle dzila random,bo liczba ' + randomNumber + ' poza zakresem od 1 do 3');
// }

// console.log('Computer wpisał: ' + computerMove);

// // let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');

// let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamien';
// } else if(playerInput == '2'){
//     playerMove = 'papier';
// } else if(playerInput == '3'){
//     playerMove = 'nozyce';
// } else {
//     console.log ('zle podales liczbe,bo liczba ' + playerInput + ' poza zakresem od 1 do 3');
// }

// console.log('Gracz wpisał: ' + playerMove);

// kodillaCode__________

// console.log('Human chose: ' + playerMove);
// console.log('Robot chose: ' + computerMove);

// if(computerMove == 'kamien' && playerMove == 'papier'){
//     console.log('Human WIN');
// } else if(computerMove == 'papier' && playerMove == 'kamien'){
//     console.log('Robot WIN');
// } else if(computerMove == 'nozyce' && playerMove == 'kamien'){
//     console.log('Human WIN');
// } else if(computerMove == 'kamien' && playerMove == 'nozyce'){
//     console.log('Robot WIN');
// } else if(computerMove == 'papier' && playerMove == 'nozyce'){
//     console.log('Human WIN');
// } else if(computerMove == 'nozyce' && playerMove == 'papier'){
//     console.log('Robot WIN');
// } else if(computerMove == playerMove){
//     console.log('Draw');
// } else {
//     console.log(computerMove + ' albo ' + playerMove + ' nie jest poprawno podany.');
// }

// myCode_________

// console.log('Human chose: ' + playerMove);
// console.log('Robot chose: ' + computerMove);

// if((computerMove == 'kamien' && playerMove == 'papier') || (computerMove == 'nozyce' && playerMove == 'kamien') || (computerMove == 'papier' && playerMove == 'nozyce')){
//     console.log('Human WIN');
// } else if((computerMove == 'papier' && playerMove == 'kamien') || (computerMove == 'kamien' && playerMove == 'nozyce') || (computerMove == 'nozyce' && playerMove == 'papier')){
//     console.log('Robot WIN');
// } else if(computerMove == playerMove){
//     console.log('Draw');
// } else {
//   console.log(computerMove + ' albo ' + playerMove + ' nie jest poprawno podany.');
// }

// anotherOneCode

// if (randomNumber > playerInput){

// } else if(randomNumber < playerInput){

// } else if(randomNumber = playerInput){

// } else {
//
// }
