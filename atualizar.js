const usuarios = require("./usuarios")
const listar = require("./listar")

function atualizar(id, usuario) {
    usuario.id = usuarios.length 
    usuarios[id] = usuario
    }

module.exports = atualizar
