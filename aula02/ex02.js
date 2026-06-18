const input = require('readline-sync')

let senha = input.question("Digite sua senha: ")

function ValidarSenha(senha){
    if (senha.length >= 8){
    return("Senha Válida!")
    } else {
        return("Senha fraca - minimo de 8 caracteres")
    }
}

console.log(ValidarSenha(senha))