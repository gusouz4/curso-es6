"use strict";

var usuario = {
  nome: 'Gustavo',
  idade: 20,
  endereco: {
    cidade: 'Bh',
    estado: 'MG'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
