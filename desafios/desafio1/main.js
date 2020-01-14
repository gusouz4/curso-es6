class Usuario{
    constructor(email, senha){
    }
}

var admin;

class Admin extends Usuario {
    isAdmin() {
        if (User1 === Adm1){
            admin = true;
        }
    }
}
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(admin);