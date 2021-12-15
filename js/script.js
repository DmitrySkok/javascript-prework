{
function playGame(playerInput) {
  clearMessages();
  console.clear();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Wylosowana liczba to: " + randomNumber);

  const computerMove = getComputerName(randomNumber);
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

  const playerMove = getPlayerMove(playerInput);
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
}