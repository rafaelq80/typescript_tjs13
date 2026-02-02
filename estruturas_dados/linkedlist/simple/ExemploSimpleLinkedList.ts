import { SimpleLinkedList } from './SimpleLinkedList';

const list = new SimpleLinkedList<number>();
  
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log("\nTamanho da lista:", list.getSize());
list.print();

list.remove(20);
console.log("\nApós remover 20:");
list.print(); 

console.log("\nTamanho da lista:", list.getSize());

console.log("\nBuscar o número 10:", list.find(10));
console.log("\nLista está vazia?", list.isEmpty()); 

list.remove(5);
list.remove(10);
list.remove(30);

console.log("\nLista após remover todos os elementos:");
list.print();

console.log("\nTamanho da lista:", list.getSize()); 
