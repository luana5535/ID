const atualizar = require("./atualizar")
const usuarios = require("./usuarios")

function listar() {
    for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    console.log(`
    ID: ${usuario.id},
    Nome: ${usuario.nome},
    Email: ${usuario.email},
    `);
    
    for (let j = 0; j < usuario.telefones.length; j++) {
    console.log(` ${j+1}. ${usuario.telefones[j]}`);
    }
    console.log('');
    }
    }

module.exports = listar
