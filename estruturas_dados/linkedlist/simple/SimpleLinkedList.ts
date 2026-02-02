import { Node } from './Node';
  
  interface ILinkedList<T> {
    append(value: T): void;
    prepend(value: T): void;
    remove(value: T): boolean;
    find(value: T): Node<T> | null;
    isEmpty(): boolean;
    getSize(): number;
    print(): void;
  }
  
  export class SimpleLinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null = null;
    private size: number = 0;
  
    append(value: T): void {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    prepend(value: T): void {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    remove(value: T): boolean {
      if (!this.head) return false;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return true;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
  
      return false;
    }
  
    find(value: T): Node<T> | null {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null;
    }
  
    isEmpty(): boolean {
      return this.size === 0;
    }
  
    getSize(): number {
      return this.size;
    }
  
    print(): void {
      if (!this.head) {
        console.log("Lista está vazia.");
        return;
      }
  
      let current: Node<T> | null = this.head;
      const values: T[] = [];
      
      // Itera pelos nós da lista encadeada
      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }
  
      console.log(values.join(" -> "));
    }
  }
  
  