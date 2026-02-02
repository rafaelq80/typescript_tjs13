import { DoublyLinkedList } from "./DoublyLinkedList";

// Criando uma instância da lista duplamente encadeada
const lista = new DoublyLinkedList<number>();

// Adicionando elementos à lista
lista.append(10); 
lista.append(20); 
lista.append(30); 
lista.append(40);   

// Imprimindo a lista da cabeça até a cauda
console.log("\nLista na ordem direta:");
lista.print(); 

// Imprimindo a lista da cauda até a cabeça
console.log("\nLista na ordem reversa:");
lista.printReverse();  

// Removendo um valor da lista
console.log("\nRemovendo o valor 20 da lista...");
const removed = lista.remove(20); 
console.log(removed ? "Valor 20 removido." : "Valor 20 não encontrado.");

// Imprimindo novamente a lista da cabeça até a cauda
console.log("\nLista após remoção do valor 20:");
lista.print();  

// Tentando remover um valor que não está na lista
console.log("\nTentando remover o valor 50 (não existente)...");
const removedInvalid = lista.remove(50);
console.log(removedInvalid ? "Valor 50 removido." : "Valor 50 não encontrado.");

// Imprimindo novamente a lista
console.log("\nLista após tentativa de remoção do valor 50:");
lista.print(); 
