const nomes = ['Maria', 'Joao', 'Ana', 'Eduardo', 'Gabriel'];
console.log('🚀 ~ file: index.js ~ line 2 ~ nomes', nomes);

// array.splice(indice,delete, element, element);

//remover elemento
nomes.splice(4, 1);
// nomes.splice(-1, 1);

//adicionar um elemento
nomes.splice(3, 0, 'Luiz');

console.log('🚀 ~ file: index.js ~ line 2 ~ nomes', nomes);
