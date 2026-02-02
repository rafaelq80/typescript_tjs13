import { Node } from './Node'

interface IBinarySearchTree<T> {
	insert(value: T): void
	remove(value: T): boolean
	find(value: T): boolean
	inOrder(): T[]
	preOrder(): T[]
	postOrder(): T[]
	isEmpty(): boolean
	getSize(): number
}

/**
 * Estrutura Básica
 * 
 * A implementação é uma classe genérica de Árvore de Busca Binária que pode armazenar qualquer tipo de valor. 
 * As principais características são:
 * - Cada nó tem um valor e pode ter até dois filhos (esquerdo e direito)
 * - Os valores menores que o nó atual vão para a esquerda
 * - Os valores maiores que o nó atual vão para a direita
 */
export class BinarySearchTree<T> implements IBinarySearchTree<T> {
	
	private root: Node<T> | null = null
	private size: number = 0

	/**
	 * Insere um valor na árvore
	 * 
	 * - Quando um novo valor é inserido, a árvore encontra a posição correta para ele
	 * - Se a raiz está vazia, o novo nó se torna a raiz
	 * - Caso contrário, usa o método recursivo insertNode para encontrar a posição correta
	 * - Incrementa o tamanho da árvore a cada inserção
	 *  */ 
	insert(value: T): void {
		const newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
		} else {
			this.insertNode(this.root, newNode)
		}
		this.size++
	}

	private insertNode(node: Node<T>, newNode: Node<T>): void {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode
			} else {
				this.insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				this.insertNode(node.right, newNode)
			}
		}
	}

	/**
	 * Remove um valor da árvore
	 * 
	 * - Remove um valor específico da árvore
	 * - Trata diferentes cenários de remoção:
	 * - Nó folha (sem filhos): simplesmente remove
	 * - Nó com um filho: substitui pelo filho
	 * - Nó com dois filhos: encontra o menor nó da subárvore direita e o substitui
	 *  */ 
	remove(value: T): boolean {
		this.root = this.removeNode(this.root, value)
		return this.size > 0
	}

	private removeNode(node: Node<T> | null, value: T): Node<T> | null {
		if (node === null) {
			return null
		}

		if (value < node.value) {
			node.left = this.removeNode(node.left, value)
		} else if (value > node.value) {
			node.right = this.removeNode(node.right, value)
		} else {
			if (node.left === null && node.right === null) {
				node = null
			} else if (node.left === null) {
				node = node.right
			} else if (node.right === null) {
				node = node.left
			} else {
				const minRightNode = this.findMinNode(node.right)
				node.value = minRightNode.value
				node.right = this.removeNode(node.right, minRightNode.value)
			}
		}
		this.size--
		return node
	}

	private findMinNode(node: Node<T>): Node<T> {
		while (node.left !== null) {
			node = node.left
		}
		return node
	}

	/**
	 * Verifica se um valor existe na árvore
	 * 
	 * - Usa busca recursiva, navegando para esquerda ou direita conforme o valor
	 */
	find(value: T): boolean {
		return this.findNode(this.root, value) !== null
	}

	private findNode(node: Node<T> | null, value: T): Node<T> | null {
		if (node === null) {
			return null
		}

		if (value < node.value) {
			return this.findNode(node.left, value)
		} else if (value > node.value) {
			return this.findNode(node.right, value)
		}
		return node
	}

	/**
	 * Retorna os valores da árvore em ordem (in-order)
	 * 
	 * Percorre a árvore na ordem: esquerda -> raiz -> direita
	 *  */ 
	inOrder(): T[] {
		const result: T[] = []
		this.inOrderTraversal(this.root, result)
		return result
	}

	private inOrderTraversal(node: Node<T> | null, result: T[]): void {
		if (node !== null) {
			this.inOrderTraversal(node.left, result)
			result.push(node.value)
			this.inOrderTraversal(node.right, result)
		}
	}

	/**
	 * Retorna os valores da árvore em pré-ordem (pre-order)
	 * 
	 * Percorre a árvore na ordem: raiz -> esquerda -> direita
	 *  */ 
	preOrder(): T[] {
		const result: T[] = []
		this.preOrderTraversal(this.root, result)
		return result
	}

	private preOrderTraversal(node: Node<T> | null, result: T[]): void {
		if (node !== null) {
			result.push(node.value)
			this.preOrderTraversal(node.left, result)
			this.preOrderTraversal(node.right, result)
		}
	}

	/**
	 * Retorna os valores da árvore em pós-ordem (post-order)
	 * 
	 * Percorre a árvore na ordem: esquerda -> direita -> raiz
	 *  */ 
	postOrder(): T[] {
		const result: T[] = []
		this.postOrderTraversal(this.root, result)
		return result
	}

	private postOrderTraversal(node: Node<T> | null, result: T[]): void {
		if (node !== null) {
			this.postOrderTraversal(node.left, result)
			this.postOrderTraversal(node.right, result)
			result.push(node.value)
		}
	}

	// Verifica se a árvore está vazia
	isEmpty(): boolean {
		return this.size === 0
	}

	// Retorna o tamanho da árvore
	getSize(): number {
		return this.size
	}

	/**
	 * Impressão da árvore
	 * 
	 * - Um método único que imprime a estrutura da árvore no console Mostra:
	 * - Valor do nó
	 * - Profundidade do nó
	 * - Tipo de nó (raiz, filho esquerdo, filho direito)
	 * - Representação visual da estrutura da árvore
	 */
	printGraphically(): void {
        if (this.root === null) {
            console.log("A árvore está vazia.");
            return;
        }
    
        const lines: string[] = [];
        const maxDepth = this.getMaxDepth(this.root);
        const maxValueWidth = this.getMaxValueWidth();
    
        // Cabeçalho com informações da árvore
        lines.push(`Árvore de Busca Binária:`);
        lines.push(`Tamanho: ${this.size} | Profundidade: ${maxDepth}`);
        lines.push('');
    
        // Imprimir a estrutura da árvore
        this.printTreeNode(this.root, '', null, lines, 0, maxDepth, maxValueWidth);
    
        // Exibir a árvore
        console.log(lines.join('\n'));
    }
    
    // Métodos auxiliares    
    private printTreeNode(
        node: Node<T> | null, 
        prefix: string, 
        childType: 'left' | 'right' | null, 
        lines: string[], 
        currentDepth: number, 
        maxDepth: number,
        maxValueWidth: number
    ): void {
        if (node === null) return;
    
        // Criar padding baseado na largura do valor do nó para alinhamento consistente
        const valuePadding = ' '.repeat(Math.max(0, maxValueWidth - String(node.value).length));
    
        // Adicionar informação sobre o tipo de filho (raiz, filho esquerdo ou direito)
        const childTypeInfo = childType === null ? 'Raiz' : 
                              childType === 'left' ? '(Filho Esquerdo)' : 
                              '(Filho Direito)';
    
        // Determinar representação do nó com informações adicionais
        const nodeInfo = `${node.value}${valuePadding} D:${currentDepth} ${childTypeInfo}`;
        
        // Criar estrutura visual da árvore com ramificações
        const branchPrefix = childType === 'left' ? '├── ' : 
                             childType === 'right' ? '└── ' : '';
        const nodeRepresentation = `${prefix}${branchPrefix}${nodeInfo}`;
        lines.push(nodeRepresentation);
    
        // Preparar prefixo para nós filhos
        const childPrefix = prefix + (childType === 'left' ? '│   ' : '    ');
    
        // Imprimir recursivamente filhos esquerdo e direito
        if (node.left !== null || node.right !== null) {
            if (node.left) {
                this.printTreeNode(node.left, childPrefix, 'left', lines, currentDepth + 1, maxDepth, maxValueWidth);
            } else if (currentDepth < maxDepth - 1) {
                lines.push(`${childPrefix}├── null (Filho Esquerdo)`);
            }
    
            if (node.right) {
                this.printTreeNode(node.right, childPrefix, 'right', lines, currentDepth + 1, maxDepth, maxValueWidth);
            } else if (currentDepth < maxDepth - 1) {
                lines.push(`${childPrefix}└── null (Filho Direito)`);
            }
        }
    }
    
    // Helper method to calculate the maximum depth of the tree
    private getMaxDepth(node: Node<T> | null): number {
        if (node === null) return 0;
        return 1 + Math.max(this.getMaxDepth(node.left), this.getMaxDepth(node.right));
    }
    
    // Helper method to get the maximum width of node values for formatting
    private getMaxValueWidth(): number {
        if (this.root === null) return 0;
        return this.findMaxValueWidth(this.root);
    }
    
    private findMaxValueWidth(node: Node<T> | null): number {
        if (node === null) return 0;
        
        const currentWidth = String(node.value).length;
        const leftWidth = this.findMaxValueWidth(node.left);
        const rightWidth = this.findMaxValueWidth(node.right);
        
        return Math.max(currentWidth, leftWidth, rightWidth);
    }
    
}
