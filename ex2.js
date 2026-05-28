const input = require('readline-sync')

let num1 = Number(input.question("Digite o primeiro número: "))
let num2 = Number(input.question("Digite o segundo número: "))

console.log(`soma: ${num1 + num2}`)
console.log(`subtração: ${num1 - num2}`)
console.log(`multiplicação: ${num1 * num2}`)
 
if(num2 === 0){
    console.log(`Deu erro!`)
}

else{
    console.log(`divisão: ${num1 / num2}`)
}