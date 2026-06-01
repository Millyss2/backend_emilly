const input = require('readline-sync')

let soma = 0
let media = 0 

for(let i = 4; i >= 0;){
    let numeros = Number(input.question("Digite um numero: "))
    soma = soma + numeros;
    media = soma / 5
    i--;

}
console.log(`Sua média é de: ${media}`)

if(media >= 70.0){
    console.log(`Aprovado!`)
}
else if(media < 70.0){
    console.log(`Em recuperação!`)
}
else if (media <= 50.0 ){
    console.log(`Reprovado!`)
}