//Criando um jogo de adivinhações

let computerNumber;
let userNumbers = [];
let attemps = 0;
let maxGuesses = 5;

function init() {
  //Armazenando variaveis na variavel computerNumber:
  computerNumber = Math.floor(Math.random() * 100 + 1);
}

//Função de comparação
function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;
  if (attemps < maxGuesses) {
    //Criando os ifs do jogo:
    if (userNumber > compareNumbers) {
      document.getElementById("textOutput").innerHTML =
        "Your number is too high.";
      document.getElementById("inputBox").value = "";
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Your number is too low.";
      document.getElementById("inputBox").value = "";
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
    } else {
      document.getElementById("textOutput").innerHTML =
        "Yeah, congratulations!!";
      attemps++;
      document.getElementById("attempts").innerHTML = attemps;
    }
  } else {
    document.document.getElementById("textOutput").innerHTML =
      "You, lose. The computer number is: " + computerNumber;
  }
}
