
const input = require('readline-sync')

let altura = input.question("Escreva o tamanho da altura desse triângulo: ")
let base = input.question("Escreva o tamanho da base desse triângulo: ")
let area = 0
let per = 0

area = base * area / 2
per = 2 * base + 2* altura

console.log(`A área do triangulo é: ${area}`)
console.log(`O perimetro do triangulo é: ${per}`)



