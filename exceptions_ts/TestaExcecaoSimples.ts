import readline = require("readline-sync");

let resultado: number | null;
let loop: boolean = true;

do {
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log(`${numero1} / ${numero2} = ${resultado ? resultado : "Não existe divisão por zero!"}`);

        loop = false;

} while (loop);

function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        return null;

    return numero1 / numero2;

}