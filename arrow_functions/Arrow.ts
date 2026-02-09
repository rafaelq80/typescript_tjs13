const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nListar Números");

// Sem Arrow Function
// for (let numero of numeros){
//     console.log(numero);
// }

// Com Arrow Function

numeros.forEach(numero => console.log(numero));

numeros.forEach(numero => console.log(numero * 2));

numeros.forEach(numero => {
    if (numero % 2 === 0)
        console.log(numero);
} );

