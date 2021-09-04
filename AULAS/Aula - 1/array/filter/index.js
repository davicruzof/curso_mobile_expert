const numeros = [5, 6, 73, 8, 9, 80, 15, 19, 3, 4];

// retorna os numeros maior que 10
const filtados = numeros.filter((value) => value > 10);
const pares = numeros.filter((value) => value % 2 == 0);
console.log(pares);

const pessoas = [
  { nome: 'Anna', idade: 62 },
  { nome: 'Pedro', idade: 12 },
  { nome: 'Eduardo', idade: 35 },
  { nome: 'Daniella', idade: 17 },
  { nome: 'Jose', idade: 28 },
  { nome: 'Wallace', idade: 29 },
  { nome: 'Maria', idade: 55 },
];

const pessoasComNomesGrandes = pessoas.filter((value) => value.nome.length > 5);
// console.log(
//   '🚀 ~ file: index.js ~ line 20 ~ pessoasComNomesGrandes',
//   pessoasComNomesGrandes,
// );

const pessoasMaioresDeIdade = pessoas.filter((value) => value.idade >= 18);
// console.log(
//   '🚀 ~ file: index.js ~ line 24 ~ pessoasMaioresDeIdade',
//   pessoasMaioresDeIdade,
// );

const pessoasComNomeTerminadoComA = pessoas.filter((value) =>
  value.nome.toLowerCase().endsWith('a'),
);
console.log(
  '🚀 ~ file: index.js ~ line 32 ~ pessoasComNomeTerminadoComA',
  pessoasComNomeTerminadoComA,
);
