// Aula 15
let num = 9.5644;

// Arredondar para baixo inteiro
let arredondadoBaixo = Math.floor(num);
console.log(arredondadoBaixo);

// Arredondar para cima inteiro
let arredondadoCima = Math.ceil(num);
console.log(arredondadoCima);

// Arredondar para o mais proximo
let arredondarProximo = Math.round(num);
console.log(arredondarProximo);

// Maior numero de uma sequencia
console.log(Math.max(1,2,350,4,6,67,2));

// Menor numero de uma sequencia
console.log(Math.min(1,2,350,-4,6,67,2));

// Gerar numeros aleatorios entre 0 e 1
console.log(Math.random());
// console.log(Math.random().toFixed(2));

// Gerar numero aleatorio entre um intervalo 
const aleatorio = Math.round(Math.random() * (10-1) + 1);
console.log(aleatorio);
