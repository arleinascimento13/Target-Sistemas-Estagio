/*
1. Calcula o valor total de faturamento,
excluindo dias com valor 0 (dias sem faturamento,
como finais de semana e feriados).

2. Calcula a média mensal do faturamento.

3. Encontra o menor e maior valor de faturamento, excluindo dias sem faturamento.

4. Conta quantos dias tiveram faturamento superior à média mensal.
 
*/

// Recebe o arquivo JSON com os dados
const data = require("./assets/dados.json");

// Variáveis
let menorValor = Infinity;
let maiorValor = 0;
let valorTotal = 0;
let mediaValor = 0;
let diasMediaMaiorMensal = 0;

// 1. Calcula o valor total de faturamento, excluindo dias com valor 0
data.forEach((value) => {
  if (value.valor > 0 /* dias sem faturamento, fim de semana ou feriado */) {
    valorTotal += value.valor;
  }
});

// 2. Calcula a média mensal do faturamento
mediaValor = valorTotal / data.length;

// 3. Encontra o menor e maior valor de faturamento, e conta os dias acima da média
data.forEach((value) => {
  if (value.valor > 0 && value.valor < menorValor) {
    menorValor = value.valor;
  }

  if (value.valor > maiorValor) {
    maiorValor = value.valor;
  }

  // 4. Conta quantos dias tiveram faturamento superior à média mensal
  if (value.valor > mediaValor) {
    console.log(value.dia);
    diasMediaMaiorMensal += 1;
  }
});

// Exibe o menor valor, maior valor e número de dias com faturamento acima da média
console.log(menorValor, maiorValor, diasMediaMaiorMensal);
