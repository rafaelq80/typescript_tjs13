import { BinarySearchTree } from "./BinarySearchTree";

const arvore = new BinarySearchTree<number>();

// Inserindo valores
arvore.insert(8);
arvore.insert(3);
arvore.insert(10);
arvore.insert(1);
arvore.insert(6);
arvore.insert(14);
arvore.insert(4);
arvore.insert(7);
arvore.insert(13);
arvore.insert(15);
arvore.insert(15);

arvore.printGraphically()

// Imprimindo a árvore em diferentes ordens
console.log("In-order transversal:", arvore.inOrder());    
console.log("Pre-order transversal:", arvore.preOrder()); 
console.log("Post-order transversal:", arvore.postOrder()); 

// // Buscando valores
// console.log("Buscar 4:", arvore.find(4)); 
// console.log("Buscar 25:", arvore.find(25)); 

// // Removendo um valor
// console.log("Remover 10:", arvore.remove(10)); 
// console.log("In-order traversal após remoção:", arvore.inOrder()); 

// // Verificando tamanho e se está vazio
// console.log("Tamanho da árvore:", arvore.getSize()); 
// console.log("Árvore está vazia?", arvore.isEmpty()); 