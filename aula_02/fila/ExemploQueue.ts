import leia from "readline-sync";
import { Queue } from "./Queue";

const fila = new Queue<string>();

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");

fila.enqueue(leia.question("Digite um nome: "))

console.log("*** Fila Original ***")
fila.printQueue();

console.log("\n")

fila.dequeue();

console.log("*** Fila após a remoção de um elemento ***")
fila.printQueue();

console.log("\n");

console.log("Tamanho da fila: ", fila.count());

let busca = "Erick";
busca.toLowerCase;

console.log("O Erick está na fila? ", fila.contains(busca));