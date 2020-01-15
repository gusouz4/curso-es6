// 4.1
const empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
const {
  nomeEmpresa,
  endereco: {
    cidade,
    estado
  }
} = empresa;
console.log(nomeEmpresa);
console.log(cidade);
console.log(estado); // 4.2

const usuario = {
  nome: 'Gustavo',
  idade: 20
};
const {
  nome,
  idade
} = usuario;

function mostraInfo(usuario) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo());
