
/*O que é uma Lista Linkada?
Uma lista linkaada (ou lista encadeada) é uma estrutura de dados linear composta por uma sequência de elementos, chamados nós. Cada nó contém dois componentes principais:

Valor: O dado armazenado no nó.

Referência (ou ponteiro): Uma referência para o próximo nó na lista.

A vantagem das listas linkadas em relação a outras estruturas, como arrays, é que elas permitem a inserção e remoção de elementos de maneira eficiente, sem a necessidade de deslocar outros elementos na memória. */



// Definição da classe Nó
class No {
  constructor(valor) {
    this.valor = valor;   // Valor armazenado no nó
    this.proximo = null;  // Referência para o próximo nó (inicialmente null)
  }
}

// Definição da classe ListaLikada
class ListaLigada {
  
  
  constructor() {
    this.primeiro = null; // O primeiro nó da lista (inicialmente, não há nenhum nó)
    this.tamanho = 0;     // Tamanho da lista (quantos nós existem na lista)
  }

  // Método para adicionar um nó no final da lista
  /**Criação do Novo Nó**: Um novo nó (`novoNo`) é criado com o valor fornecido.
   **Verificação de Lista Vazia**: O método verifica se a lista está vazia:
     Se estiver vazia (`this.primeiro` é `null`), o novo nó se torna o primeiro nó da lista.
   **Adição ao Final da Lista**: 
     Se a lista não estiver vazia, o método percorre a lista a partir do primeiro nó (`this.primeiro`) até encontrar o último nó (onde `atual.proximo` é `null`).
     O novo nó é então adicionado ao final da lista, atualizando a referência do último nó para apontar para o novo nó.
   **Atualização do Tamanho**: O tamanho da lista (`this.tamanho`) é incrementado para refletir a  adição do novo nó. */
  adicionar(valor) {

    const novoNo = new No(valor); // Cria um objeto novo nó com o valor fornecido

    // verifica lista se esta vazia
    if (!this.primeiro) { // Se a lista estiver vazia
    
      this.primeiro = novoNo; // O novo nó se torna o primeiro nó
    
    } else { // se a lista tiver dados
      
      let atual = this.primeiro; // Começa do primeiro nó
      
      // enquanto proximo for true(valor de referencia) significa qye tem dado
      while (atual.proximo) {   // Procura o último nó
        
        atual = atual.proximo; // avança para proxima referencia até chegar em uma null
      }                        // ao chegar na null significa que chegou no ultimo
      
      atual.proximo = novoNo;  // Adiciona o novo nó ao final da lista
    }

    this.tamanho++; // Aumenta o tamanho da lista
  }

  // Método para imprimir todos os valores da lista
  imprimir() {

    let atual = this.primeiro; // Começa do primeiro nó
    
    // enquanto atual for true(exite dado)
    while (atual) {            // Percorre a lista até o final
    
      console.log(atual.valor); // Imprime o valor do nó atual
    
      atual = atual.proximo;    // Move para o próximo nó
    }
  }

  // Método para obter o valor de um nó em uma determinada posição
  obter(posicao) {
    
    if (posicao < 0 || posicao >= this.tamanho) { // Verifica se a posição é inválida
    
      return null; // Retorna null para indicar posição inválida
    
    }
  
    let atual = this.primeiro; // Começa no primeiro nó
    let indice = 0; // Índice inicial
  
    // enquanto indice for menor que posição(pderia ser um for) pq quando for igual
    // se achou a posicao do dado
    while (indice < posicao) { // Percorre a lista até a posição desejada
      atual = atual.proximo;   // Move para o próximo nó
      indice++; // Incrementa o índice
    }
  
    return atual.valor; // Retorna o valor do nó na posição desejada
  }

  // Método para remover um nó em uma determinada posição
  /*
    **Verificação de Posição Inválida**: 

    **Remoção do Primeiro Nó (Posição 0)**:
   - Se a posição a ser removida for `0` (o primeiro nó):
     - A referência do primeiro nó (`this.primeiro`) é atualizada para apontar para o segundo nó (o próximo nó do atual).
  
   **Remoção de um Nó em Outra Posição**:
   - Se a posição a ser removida não for `0`:
     - Inicia a busca a partir do primeiro nó.
     - Percorre a lista até encontrar o nó na posição especificada:
     - Atualiza a referência do nó anterior (`anterior`) e o nó atual (`atual`) conforme avança.
     - Quando o nó a ser removido é encontrado, o nó anterior é ajustado para "pular" o nó atual, apontando diretamente para o próximo nó do nó atual.
   
4. **Atualização do Tamanho da Lista**: Diminui o tamanho da lista (`this.tamanho--`).

5. **Retorno do Valor Removido**: Retorna o valor do nó que foi removido.

### Em resumo:
O método encontra o nó na posição especificada e ajusta as referências para removê-lo da lista, atualizando o tamanho da lista e retornando o valor do nó removido.*/
  remover(posicao) {

    if (posicao < 0 || posicao >= this.tamanho) { // Verifica se a posição é inválida
      return null; // Retorna null para indicar posição inválida
    }
  

    let atual = this.primeiro; // Começa no primeiro nó
  

    // removendo posicao 0
    if (posicao === 0) { // Caso especial: remoção do primeiro nó
    
      this.primeiro = atual.proximo; // Define o próximo nó como o novo primeiro nó
    
    } else { // removendo outras posições
    
      let anterior = null; // Mantém referência ao nó anterior
      let indice = 0; // Índice inicial
  
      // enquanto indice for menor que posicao
      while (indice < posicao) { // Percorre até a posição desejada
        
        anterior = atual; // Atualiza o nó anterior
        
        atual = atual.proximo; // Move para o próximo nó
        
        indice++; // Incrementa o índice
      }
  
      anterior.proximo = atual.proximo; // Remove o nó atual ao pular a referência para ele
    }
  
    this.tamanho--; // Diminui o tamanho da lista
    return atual.valor; // Retorna o valor do nó removido
  }
}

// Teste
const lista = new ListaLigada();

lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);
lista.adicionar(40);

console.log(lista.obter(2)); // Deve imprimir: 30
console.log(lista.remover(1)); // Deve remover o valor 20
lista.imprimir(); // Deve imprimir: 10, 30, 40

