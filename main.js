const usuario = {
    nome: 'Gustavo',
    idade: 20,
    endereco: {
        cidade: 'Bh',
        estado: 'MG',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade, endereco: { cidade }}){
    console.log(nome, idade, cidade);
}

mostraNome(usuario);