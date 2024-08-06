const usuarios = require("./usuarios")

function adicionar(usuario) {
    usuario.id = usuarios.length +1
    usuarios.push(usuario)
    }


module.exports = adicionar 