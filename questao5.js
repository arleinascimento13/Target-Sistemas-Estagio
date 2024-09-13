/*
1. Recebe uma string e retorna essa string invertida.
*/

function inverteString(inputString) {
  let novaString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    // Loop do final para o começo da string
    novaString += inputString[i]; // Adiciona o caractere atual à nova string
  }
  return novaString; // Retorna a string invertida
}

console.log(inverteString("arlei")); // Exibe a string invertida
