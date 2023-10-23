//Criando um jogo de adivinhações

let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 5;

function newGame(){
    window.location.reload()
}

function init() {
  //Armazenando variaveis na variavel computerNumber:
  computerNumber = Math.floor(Math.random() * 100 + 1);
}

//Função de comparação
function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;
  if (attempts < maxGuesses) {
    //Criando os ifs do jogo:
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Your number is too high.";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attemps;

    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Your number is too low.";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else {
      document.getElementById("textOutput").innerHTML =
        "Yeah, congratulations!!";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("inputBox").setAttribute("Readonly","Readonly")
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      "You, lose. The computer number is: " + computerNumber;
      document.getElementById("inputBox").setAttribute("Readonly","Readonly")
  }
}
