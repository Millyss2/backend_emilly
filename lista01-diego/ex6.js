const input = require('readline-sync')

let num = input.question("Digite um numero: ")

while(num >= 1 ){
    console.log(`${num}`)

num--
}

console.log(`Fim!`)