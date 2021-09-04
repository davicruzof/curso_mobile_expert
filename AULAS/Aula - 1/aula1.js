/*
  AULA 1 
  AUTHOR: DAVÍ CRUZ
  DATA: 04/09/2021
*/

// CONSOLE

console.log('Hello');














// DECLARAÇÃO DE VARIAVEÍS

/*
   CONST

   O valor dela é atribuído na hora de sua 
   declaração e não pode ser
   atualizado durante a execução.
*/

const pi = 3.14;

// pi = 3.45

console.log(pi);











// LET

let age = 24;
console.log('Idade: ',age);

age = 30;

// let age = 40;

console.log('Nova idade:', age);













// VAR

var idade = 24;
console.log('Idade: ',idade);

var idade = 30;
console.log('Nova idade:', idade);












// VAR x LET

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;
}

console.log(a,b)







// undefined

let a;

console.log(a)








// somar valor com string

let a = '1';
let b = 1;

console.log(a + b);











// Declaração de função 


//(Function hoisting)
/*
   Parâmetros são os valores que a função vai usar
   para realizar alguma tarefa
  nome de função deve começar com uma letra
*/

function essaFunçãoFalaOi(parametros) {
  // corpo da função
  // o que a função vai executar
  console.log("Oi!");
}

essaFunçãoFalaOi()








// Function expression
const somaDoisNumeros = (n1,n2) => {
  return n1 + n2;
}

console.log(somaDoisNumeros(2,5))







// função anonima

(() => {
  console.log("Oi!");
})();





// parametros

const nomeCompleto = (nome, sobrenome = "Luiza") => {
  return nome + " " + sobrenome;
}

console.log(nomeCompleto('Ana','Santana'))