const input = require('readline-sync')

let letra = input.question("Digite uma letra: ")
let texto = input.question("Digite um texto: ")
let contador = 0

for(let i = 0; i < texto.length; i++){
    if(texto[i] === letra) {
        contador++;
    }
}

console.log(`A letra ${letra} aparece ${contador} vezes no texto.`)