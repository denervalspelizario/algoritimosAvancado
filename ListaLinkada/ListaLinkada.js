// Definição da classe Node
class Node {
  constructor(value) {
    this.value = value; // Valor armazenado no nó
    this.next = null;   // Referência para o próximo nó (inicialmente null)
  }
}

// Definição da classe ListaLinkada
class ListaLinkada {
  constructor() {
    this.head = null;  // O primeiro nó da lista (inicialmente, não há nenhum nó)
    this.size = 0;     // Tamanho da lista (quantos nós existem na lista)
  }

  // Método para adicionar um nó no final da lista
  add(value) {
    const newNode = new Node(value); // Cria um novo nó com o valor fornecido

    if (!this.head) { // Se a lista estiver vazia
      this.head = newNode; // O novo nó se torna o primeiro nó (head)
    } else {
      let current = this.head; // Começa do primeiro nó
      while (current.next) {   // Procura o último nó
        current = current.next;
      }
      current.next = newNode;  // Adiciona o novo nó ao final da lista
    }

    this.size++; // Aumenta o tamanho da lista
  }

  // Método para imprimir todos os valores da lista
  print() {
    let current = this.head; // Começa do primeiro nó
    while (current) {        // Percorre a lista até o final
      console.log(current.value); // Imprime o valor do nó atual
      current = current.next;     // Move para o próximo nó
    }
  }

  get(position) {
    if (position < 0 || position >= this.size) { // Verifica se a posição é inválida
      return null; // Retorna null para indicar posição inválida
    }
  
    let current = this.head; // Começa no primeiro nó
    let index = 0; // Índice inicial
  
    while (index < position) { // Percorre a lista até a posição desejada
      current = current.next; // Move para o próximo nó
      index++; // Incrementa o índice
    }
  
    return current.value; // Retorna o valor do nó na posição desejada
  }

  remove(position) {
    if (position < 0 || position >= this.size) { // Verifica se a posição é inválida
      return null; // Retorna null para indicar posição inválida
    }
  
    let current = this.head; // Começa no primeiro nó
  
    if (position === 0) { // Caso especial: remoção do primeiro nó
      this.head = current.next; // Define o próximo nó como o novo primeiro nó
    } else {
      let previous = null; // Mantém referência ao nó anterior
      let index = 0; // Índice inicial
  
      while (index < position) { // Percorre até a posição desejada
        previous = current; // Atualiza o nó anterior
        current = current.next; // Move para o próximo nó
        index++; // Incrementa o índice
      }
  
      previous.next = current.next; // Remove o nó atual ao pular a referência para ele
    }
  
    this.size--; // Diminui o tamanho da lista
    return current.value; // Retorna o valor do nó removido
  }
}

// Teste
const list = new ListaLinkada();

list.add(10);
list.add(20);
list.add(30);
list.add(40);

console.log(list.get(2)); // Deve imprimir: 30
console.log(list.remove(1)); // Deve remover o valor 20
list.print(); // Deve imprimir: 10, 30, 40

