var lista = ['Matheus', 'Lucas', 'Davi', 'Tiago'];
var list = ['Ana', 'Luiza', 'Jaoana'];
// remover o primeiro item do array
lista.shift();
console.log(lista)

// remover o ultimo elemento
lista.pop();
console.log(lista)

// adicionar um item no final lista
lista.push('Matheus');
console.log(lista)

// adicionar um item no inicio lista
lista.unshift('Tadeu');
console.log(lista)

// Concatenar dois arrays
var pessoas = lista.concat(list);
console.log(pessoas);

console.log(lista.join('/'));

// alterar um item

lista.indexOf('Pedro') != -1 && (lista[lista.indexOf('Pedro')] = 'Lucas Ferreira');

console.log(lista);
