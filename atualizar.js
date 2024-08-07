const usuarios = require("./usuarios")

function atualizar(id, usuario) {
    usuario.id = usuarios.length 
    usuarios[id] = usuario
    }

module.exports = atualizar
