const input = require('readline-sync')

let num = input.question("Digite um número: ")


if (num % 2 === 0  ){
    console.log(`Número par`)
}

else {
    console.log(`Número impar`)
}
