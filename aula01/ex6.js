const input = require('readline-sync')

const secreto = 42;
let tentativas = 0;

while (true) {
    let palpite = Number(prompt("Adivinhe o número:"));
    tentativas++;

    if (palpite === secreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
        break;
    } else if (palpite < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}