/*
1. Checa se o valor está na sequência de Fibonacci.
2. Gera números da sequência até encontrar o valor informado.
*/

// Valor a verificar
let input = 20;

// Inicia os primeiros números da sequência de Fibonacci
let ini = 0; // Primeiro número
let mid = 1; // Segundo número
let end = 0; // Próximo número
let achouValor = 0; // Flag para indicar se o valor foi encontrado

// Gera números da sequência até encontrar o valor
for (let index = 1; index < input; index++) {
  end = ini + mid; // Próximo número
  ini = mid; // Atualiza o primeiro número
  mid = end; // Atualiza o segundo número

  // Checa se o número encontrado é o valor informado
  if (end == input) {
    achouValor = 1; // Marca como encontrado
  }
}

// Mostra se o valor está na sequência de Fibonacci ou não
console.log(
  achouValor == 1
    ? "Valor informado pertence a Fibonacci" // Se encontrou
    : "Valor informado não pertence a Fibonacci" // Se não encontrou
);
