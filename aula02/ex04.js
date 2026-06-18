const input = require('readline-sync')

function executarOperacao(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log(resultado);
}

executarOperacao(10, 3, (a, b) => a + b); // deve exibir 13
executarOperacao(10, 3, (a, b) => a * b); // deve exibir 30
executarOperacao(10, 3, (a, b) => a - b); // deve exibir 7
