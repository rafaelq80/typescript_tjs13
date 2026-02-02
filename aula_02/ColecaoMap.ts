import leia from "readline-sync";

const participantes: Map<number, string> = new Map<number, string>();

participantes.set(1, "Ana");
participantes.set(2, "Samuel");
participantes.set(3, "Leonardo");
participantes.set(4, "Camila");

let matricula = leia.questionInt("Digite o numero da matricula: ")
let nome = leia.question("Digite o nome do participante: ")

participantes.set(matricula, nome);

for(let [matricula, nome] of participantes){
    console.log(`Matrícula: ${matricula} - Nome: ${nome}`)
}

// Procurar um elemento pela chave
console.log("Existe a matrícula 2? ", participantes.has(2));

// Procurar um elemento pelo valor
console.log("Existe a participante Ana? ", Array.from(participantes.values()).includes("Ana"));

for(let matricula of participantes.keys()){
    console.log(matricula);
}

// Procurar um valor com base na chave
console.log("Qual é o nome do aluno com a matrícula 3?", participantes.get(3));

participantes.delete(3);

console.table(participantes);