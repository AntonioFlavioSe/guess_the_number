//Criando um jogo de adivinhações

let computerNumber;
let userNumbers = [];

function init() {
  //Armazenando variaveis na variavel computerNumber:
  computerNumber = Math.floor(Math.random() * 100 + 1);
}

//Função de comparação
function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(' ' + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;
}
