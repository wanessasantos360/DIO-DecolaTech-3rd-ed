function substituiPares (array) {
  if( !array.length ) return -1; // Verifica se é um array válido para só então ir para o laço for
  
  for(let i = 0; i < array.length; i++){
    if (array [i] === 0){
      console.log("Você já é zero")
    }
    else if (array [i] % 2 === 0){
      console.log(`Substituido ${array[i]} por 0...`) // interpolação de string   sempre user acento grave com `${interpolação}`
      // referencias https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      array[i] = 0;
    }
    
  }
  return array;
}

let arr = [1, 3, 4, 5, 6, 8, 23, 392, 2002, 5, 40, 100, 1, 5, 25, 10]; // array generico
console.log(substituiPares(arr));