import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

console.log(numeros.length);

numeros.push(5);
numeros.push(1,5,7,9);

numeros.push(leia.questionInt("Digite um numero: "));
//console.table(numeros)

for(let numero of numeros){
    console.log(numero)
}

// Verifica se o elemento existe
console.log("O numero 5 existe? ", numeros.includes(5));

// Verifica o indice do elemento
console.log("O indice do numero 7: ", numeros.indexOf(7));

// Deletar elemento
numeros.splice(numeros.indexOf(7), 1);

console.table(numeros);