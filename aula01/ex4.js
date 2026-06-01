const input = require('readline-sync')

const numero = Number(input.question("Digite o número para a tabuada: "))

for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}