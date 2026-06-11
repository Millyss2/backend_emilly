const input = require('readline-sync')


let C = input.question("Digite a temperatura em celsius: ")
let F = 0


F = C * 1.8 + 32
console.log(`Fazendo a conversão...`)
console.log(`Convertendo em fahrenheit fica: ${F}`)