/*
1. Calcula o total de faturamento.
2. Calcula o percentual de faturamento de cada estado em relação ao total.
*/

// Dados de faturamento por estado
const faturamento = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

// Calcula o total de faturamento somando os valores
const faturamentoTotal = faturamento.reduce((total, item) => {
  return (total += item.valor);
}, 0);

// Calcula o percentual de cada estado em relação ao total
const calculoPercentual = faturamento.map((item) => {
  let percentual = (item.valor / faturamentoTotal) * 100; // Calcula o percentual
  return { ...item, valor: `${percentual.toFixed(1)}%` }; // Adiciona o percentual formatado
});

console.log(calculoPercentual);

// const faturamento = [
//   "SP",
//   67836.43,
//   "RJ",
//   36678.66,
//   "MG",
//   29229.88,
//   "ES",
//   27165.48,
//   "Outros",
//   19849.53,
// ];

// let faturamentoTotal = 0;
// // toda vez que for par, eh estado
// //                  impar, eh valor

// for (let i = 1; i < faturamento.length; i += 2) {
//   faturamentoTotal += faturamento[i];
// }

// for (let i = 0; i < faturamento.length; i += 2) {
//      let percentual = (faturamento[i + 1] / faturamentoTotal) * 100;
//      faturamento[i + 1] = `${percentual.toFixed(2)}%`;
// }

// console.log(faturamento);
