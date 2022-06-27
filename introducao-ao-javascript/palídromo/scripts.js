function verifica_palindromo(string){
  if (!string) return "String não existe!";
  return string.split("").reverse().join("") === string;
  
}

let myWord = "ovo";
console.log(verifica_palindromo(myWord))