import leia from "readline-sync";
import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");

pilha.push(leia.question("Digite um nome: "))

console.log("*** Pilha Original ***")
pilha.printStack();

console.log("\n")

pilha.pop();

console.log("*** pilha após a remoção de um elemento ***")
pilha.printStack();

console.log("\n");

console.log("Tamanho da pilha: ", pilha.count());

let busca = "Erick";
busca.toLowerCase;

console.log("O Erick está na pilha? ", pilha.contains(busca));