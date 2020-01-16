class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
}

var admin;

class Admin extends Usuario{
}
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

function isAdmin() {
    if(User1 === Adm1){
        return true;
    }
}

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());