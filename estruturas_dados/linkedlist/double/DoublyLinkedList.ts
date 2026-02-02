import { Node } from './Node';

export interface IDoublyLinkedList<T> {
  append(value: T): void;
  prepend(value: T): void;
  remove(value: T): boolean;
  find(value: T): Node<T> | null;
  isEmpty(): boolean;
  getSize(): number;
  print(): void;
  printReverse(): void; // Método para imprimir em ordem reversa
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null; // Referência para a cauda
  private size: number = 0;

  // Adiciona um novo nó no final da lista
  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode; // Quando a lista está vazia, o novo nó é tanto a cabeça quanto a cauda
    } else {
      if (this.tail) {
        this.tail.next = newNode; // A cauda atual aponta para o novo nó
        newNode.prev = this.tail; // O novo nó aponta para a cauda atual
        this.tail = newNode; // A cauda agora é o novo nó
      }
    }

    this.size++;
  }

  // Adiciona um novo nó no início da lista
  prepend(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode; // Quando a lista está vazia, o novo nó é tanto a cabeça quanto a cauda
    } else {
      newNode.next = this.head; // O novo nó aponta para a cabeça atual
      if (this.head) this.head.prev = newNode; // A cabeça atual aponta para o novo nó
      this.head = newNode; // A cabeça agora é o novo nó
    }

    this.size++;
  }

  // Remove o nó com o valor especificado
  remove(value: T): boolean {
    if (!this.head) return false; // Lista vazia, nada a remover

    // Se o nó a ser removido for a cabeça
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null; // Se a nova cabeça existir, limpa a referência para o nó anterior
      if (this.head === null) this.tail = null; // Se a lista ficou vazia, a cauda também é nula
      this.size--;
      return true;
    }

    // Se o nó a ser removido for a cauda
    if (this.tail && this.tail.value === value) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null; // Se a nova cauda existir, limpa a referência para o próximo nó
      if (this.tail === null) this.head = null; // Se a lista ficou vazia, a cabeça também é nula
      this.size--;
      return true;
    }

    // Se o nó a ser removido está no meio
    let current: Node<T> | null = this.head;
    while (current) {
      if (current.value === value) {
        // Atualizando as referências para os nós vizinhos
        if (current.prev) current.prev.next = current.next; // Atualiza o nó anterior
        if (current.next) current.next.prev = current.prev; // Atualiza o nó seguinte
        this.size--;
        return true;
      }
      current = current.next; // Avança para o próximo nó
    }

    return false; // Não encontrou o valor
  }

  // Encontra um nó com o valor especificado
  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Verifica se a lista está vazia
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Retorna o tamanho da lista
  getSize(): number {
    return this.size;
  }

  // Imprime os valores da lista da cabeça até a cauda
  print(): void {
    if (!this.head) {
      console.log("Lista está vazia.");
      return;
    }

    let current: Node<T> | null = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" <-> "));
  }

  // Imprime os valores da lista da cauda até a cabeça
  printReverse(): void {
    if (!this.tail) {
      console.log("Lista está vazia.");
      return;
    }

    let current: Node<T> | null = this.tail;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log(values.join(" <-> "));
  }
}
