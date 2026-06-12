const input = require('readline-sync')

function calcular(a, b, operacao) {
    return operacao(a, b);
}

const num1 = Number(input.question("Digite o primeiro número: "));
const num2 = Number(input.question("Digite o segundo número: "));

console.log(`Soma: ${calcular(num1, num2, (x, y) => x + y)}`);
console.log(`Subtração: ${calcular(num1, num2, (x, y) => x - y)}`);
console.log(`Multiplicação: ${calcular(num1, num2, (x, y) => x * y)}`);