const input = require('readline-sync')

let num1 = Number(input.question("Digite um numero aqui: "))
let num2 = Number(input.question("Digite outro numero aqui: "))


const somar = (a, b) => a + b;

const subtraçao = (a, b) => a - b;

const multiplicaçao = (a, b) => a * b;

const divisao = (a, b) => {
    if (b === 0) {
        return "Erro divisão por zero";
    }
    return a / b;
}

console.clear()

console.log("As quatro operações com os seus numeros ficam assim: ")

console.log(somar(num1, num2))
console.log(subtraçao(num1, num2))
console.log(multiplicaçao(num1, num2))
console.log(divisao(num1, num2))
