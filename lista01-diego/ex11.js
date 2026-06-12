const input = require('readline-sync')

let idade = Number(input.question("Digite a idade: "))

if (idade >= 16) {
    console.log("Você pode votar!")
} else {
    console.log("Você não pode votar!")
}