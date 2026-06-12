const input = require('readline-sync')

const produtos = [
    { id: 1, nome: "Teclado", preco: 80 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Monitor", preco: 600 },
    { id: 4, nome: "Headset", preco: 150 },
    { id: 5, nome: "Webcam", preco: 120 }
];

const produtoId3 = produtos.find(produto => produto.id === 3);
console.log(produtoId3);

const acimaDe100 = produtos.filter(produto => produto.preco > 100);
console.log(acimaDe100);

const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

produtos.forEach(produto => {
    console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$${produto.preco}`);
});