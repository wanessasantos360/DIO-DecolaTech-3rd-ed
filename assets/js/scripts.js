// Comentário 

/* 
Comentário
*/

// Aprendendo: O que são funções? 
/*
function soma(a,b) {
  console.log("A soma eh: "+ (a+b));
  return a+b;
}

soma(4,5);
*/
console.log("Hello world, JS");

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber > 0){
    spanColor = document.getElementById('currentNumber')
    spanColor.style.color = "blue";
  }
}

function decrement (){
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0){
    spanColor = document.getElementById('currentNumber')
    spanColor.style.color = "red";
  }
}