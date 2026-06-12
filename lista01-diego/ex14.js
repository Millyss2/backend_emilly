const input = require('readline-sync')

function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

const original = [1, 2, 3, 4, 5];
const invertido = reverter(original);

console.log(invertido);