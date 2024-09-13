/*
1. Calcula o total de faturamento, ignorando dias sem faturamento (como finais de semana e feriados).
2. Calcula a média mensal de faturamento.
3. Encontra o menor e o maior valor de faturamento, ignorando dias sem faturamento.
4. Conta quantos dias tiveram faturamento acima da média mensal.
*/

// Importa os dados do arquivo JSON
const data = require("./assets/dados.json");

// valor infinto, que esquisito
let menorValor = Infinity; // Começa com infinito para encontrar o menor valor
let maiorValor = 0; // Começa com 0 para encontrar o maior valor
let valorTotal = 0; // Total de faturamento
let mediaValor = 0;
let diasMediaMaiorMensal = 0; // Contador de dias(faturamento acima da média)

// 1. Calcula o total de faturamento, ignorando dias sem faturamento
data.forEach((value) => {
  if (value.valor > 0) {
    valorTotal += value.valor; // Soma o valor ao total
  }
});

// 2. Calcula a média mensal de faturamento
mediaValor = valorTotal / data.length;

// 3. Encontra o menor e maior valor de faturamento e conta os dias acima da média
data.forEach((value) => {
  if (value.valor > 0) {
    if (value.valor < menorValor) {
      menorValor = value.valor; // Atualiza o menor valor
    }

    if (value.valor > maiorValor) {
      maiorValor = value.valor; // Atualiza o maior valor
    }

    // 4. Conta quantos dias tiveram faturamento acima da média
    if (value.valor > mediaValor) {
      console.log(value.dia);
      diasMediaMaiorMensal += 1;
    }
  }
});

// Mostra o menor valor, maior valor e o número de dias com faturamento acima da média
console.log(menorValor, maiorValor, diasMediaMaiorMensal);
