import leia from "readline-sync";

let numero1: number, numero2: number;

numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");

console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
