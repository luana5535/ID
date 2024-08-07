const usuarios = require("./usuarios")

function adicionar(usuario) {
    usuario.id = usuarios.length +1

    let existe = false;
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email === usuario.email) {
        existe = true;
        console.log('Já existe uma conta vinculada a esse email.')
        }
    }   
        if (!existe) {
        usuarios.push(usuario);
        console.log('Usuário cadastrado com sucesso! ')
        }
}

module.exports = adicionar 
