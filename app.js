const prompt = require ('prompt-sync') ()

const usuarios = require ('./usuarios')
const adicionar = require ('./adicionar')
const atualizar = require ('./atualizar')
const listar = require ('./listar')
const remover = require ('./remover')

exibirMenu()
function exibirMenu() {
    console.log(`
    1- Adicionar usuário
    2- Atualizar usuário
    3- Listar usuários 
    4- Remover usuários
    5- Sair`)

    let opcao = prompt('Escolha uma opção: ')
    let index
        switch(opcao){

        case '1':
            let nome = prompt('Qual o nome do usuário? ')
            let email = prompt('Qual o email do usuário? ')
            let numero = prompt('Qual o número do usuário? ')
            adicionar({nome, email, numero})    
            console.log('Usuário cadastrado com sucesso! ')

            exibirMenu()
            break

        case '2':
            if(usuarios.length == 0){
                console.log('Ainda não há nenhum usuário cadastrado')
            }else {
                listar()
                let opcao = prompt('Digite o id: ')
                const id = usuarios.findIndex(usuario => usuario.id == opcao)
            if(id == -1) {
                console.log('id não encontrado. ')   
            }else {
                let novoNome = prompt('Qual o novo nome? ')
                let novoEmail = prompt('Qual o novo email? ')
                let novoNum = prompt('Qual o novo número? ')
                atualizar(id,{nome:novoNome, email:novoEmail, numero:novoNum})
                console.log('Usuário atualizado com sucesso! ')
            }
        }
            exibirMenu()
            break

        case '3':
            if (usuarios.length == 0) {
                console.log('Ainda não há nenhum usuário cadastrado')
            }else {
                listar()
            }
           
            exibirMenu()
            break

        case '4':
            if(usuarios.length == 0) {
                console.log('Ainda não há nenhum usuário cadastrado')
            }else {
            listar()
            index = parseInt(prompt('Digite o número que deseja remover:')) -1
            usuarios.splice(index,1)
            console.log('Usuário removida com sucesso!')    
            }
            exibirMenu()
            break

        case '5':
            break

        default:
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
    }
}
