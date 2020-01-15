// 5.1
// Rest 1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y); // Rest 2

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 4, 3)); //5.2

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
const usuario2 = { ...usuario,
  nome: 'Gabriel'
};
console.log(usuario2);
const usuario3 = { ...usuario,
  cidade: 'Lontras'
};
console.log(usuario3);
