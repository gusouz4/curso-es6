// 1º trecho
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();

// 2º trecho
import axios from 'axios';

async function getUserFromGithub(user){
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(await response.data);
    }catch(err){
        console.warn('Usuário não encontrado');
    }

};

getUserFromGithub('diego3g');
//getUserFromGithub('diego3g124123');

// 3º trecho
class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            console.log(await response.data);
        }
        catch(err){
            console.warn('Repositório não encontrado');
        }
    }
}
    Github.getRepositories('gusouz4/curso-es6');
    //Github.getRepositories('rocketseat/dslkvmskv');

// 4º trecho
    const buscaUsuario = async (user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(await response.data);
    }
    catch(err){
        console.warn('Usuário não encontrado');
    }
}

buscaUsuario('gusouz4');
buscaUsuario('diego3g');