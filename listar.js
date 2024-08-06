const atualizar = require("./atualizar")
const usuarios = require("./usuarios")

function listar() {
    usuarios.forEach((usuario) => {
        console.log(`id: ${usuario.id}, nome: ${usuario.nome}, email: ${usuario.email}, numero: ${usuario.numero}`)
    })
}

module.exports = listar