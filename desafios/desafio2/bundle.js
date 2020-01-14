const usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
const idades = usuarios.map(function (item) {
  return item.idade;
});
const filtro = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade >= '18';
});
const find = usuarios.find(function (item) {
  return item.empresa === 'Rocketseat';
});
const uniao = usuarios.reduce(function (c, n) {
  if (c.idade * 2 <= 50) {
    return c;
  }

  c.push(n);
  return c;
});
console.log(idades);
console.log(filtro);
console.log(find);
console.log(uniao);
