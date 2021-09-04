const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6];

// concatenndo array
var aux = numeros.concat(numeros2, [7, 8, 9], 'Luiz');

// rest ...array concatenando array
var restAux = [...numeros, 'Luiz', ...numeros2, ...[7, 8, 9]];

console.log('🚀 ~ file: index.js ~ line 5 ~ concat', restAux);

const nome = "16095960560";
console.log(nome.split(''));