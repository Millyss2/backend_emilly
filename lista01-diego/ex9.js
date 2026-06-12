const input = require('readline-sync')

let min = 0
let a = input.questionInt('Digite o valor de A: ')
let b = input.questionInt('Digite o valor de B: ')

if (a < b) {
    min = a
    }
    
else if (b < a) {
    min = b
}
else {
    min = a
}

console.log(`O menor valor entre A e B é: ${min}`)
