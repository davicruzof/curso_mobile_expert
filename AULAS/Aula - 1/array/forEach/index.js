const numeros = [5, 6, 73, 8, 9, 80, 15, 19, 3, 4, 11, 27, 32];

let total = 0;

numeros.forEach( (element, key) => console.log(element, key));

numeros.forEach((valor) => (total += valor));

console.log('🚀 ~ file: index.js ~ line 4 ~ total', total);
