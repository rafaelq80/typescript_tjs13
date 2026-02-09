const numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

const numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

const estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná",
    "RIO DE JANEIRO"
];

const estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

const estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

// map
console.log("\nMultiplicar todos os elementos por 3");

const numerosMultiplicadosPor3 = numerosOrdenados.map( numero => numero * 3);

console.dir(numerosMultiplicadosPor3);

// filter
console.log("\nListar todos os Estados que possuem a palavra Rio");

const estadosRio = estados.filter( estado => estado.toUpperCase().includes("RIO"));

console.dir(estadosRio);

console.log("\nListar todos os Estados que terminam com a palavra Sul");

const estadosTerminamSul = estados.filter( estado => estado.toUpperCase().endsWith("SUL"));

console.dir(estadosTerminamSul);

// reduce

console.log("\nListar todos os Estados sem repetições");

const estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if(acumulador.indexOf(estado) === -1)
        acumulador.push(estado);

    return acumulador;
}, []);

console.dir(estadosSemRepeticoes);

// find

console.log("\nEncontrar o primeiro número maior do que 9");

const numeroMaior9 = numerosRepetidos.find( numero => numero > 9);

console.log(numeroMaior9);

// findIndex

console.log("\nEncontrar o índice do primeiro número maior do que 9");

const indiceNumeroMaior9 = numerosRepetidos.findIndex( numero => numero > 9);

console.log(indiceNumeroMaior9);

// Spread Operator

console.log("\nCombinar 2 Arrays")

const arrayCombinado: number[] = [...numerosOrdenados, ...numerosDesordenados];

console.dir(arrayCombinado);