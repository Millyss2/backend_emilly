const input = require('readline-sync')

let soma = 0

let num1 = Number(input.question("Digite um numero aqui: "))
let num2 = Number(input.question("Digite um numero aqui: "))

function somar(a, b){
    return a + b;
}

function subtraçao(a, b){
    return a - b;
}

function multiplicaçao(a, b){
    return a * b;
}

function divisao(a, b){
    if (b===0) {
        return "Erro divisão por zero";
    }
    return a / b;
}

console.log(somar(num1, num2))
