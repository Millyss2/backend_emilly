const input = require('readline-sync')

let impar = 0
let par = 0
let num = 0
let qnt = 10



for (let i = 0; i <= 9; i++){
    numeros = Number(input.question(`escreva ${qnt} números: `))
    qnt--

    if(numeros % 2 === 0){
        par++
    } else {
        impar++
    }
}

console.clear()

console.log(`A quantidade de números pares é: ${par}`)
console.log(`A quantidade de números ímpares é: ${impar}`)