const input = require('readline-sync')

function range(inicio, fim) {
    const resultado = [];
    for (let i = inicio; i <= fim; i++) {
        resultado.push(i);
    }
    return resultado;
}

function soma(array) {
    let total = 0;
    for (let numero of array) {
        total += numero;
    }
    return total;
}

console.log(soma(range(1, 10))); 