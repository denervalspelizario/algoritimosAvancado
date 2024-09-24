/*
Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.

Por exemplo, a matriz quadradaé mostrado abaixo:

1 2 3
4 5 6
9 8 9  
A diagonal da esquerda para a direita =. A diagonal da direita para a esquerda =. A diferença absoluta deles é.

Descrição da função

Complete ofunção no editor abaixo.

diagonalDifference recebe o seguinte parâmetro:

int arr[n][m] : uma matriz de inteiros
Retornar

int : a diferença diagonal absoluta
Formato de entrada

A primeira linha contém um único inteiro,, o número de linhas e colunas na matriz quadrada.
Cada um dos próximoslinhas descreve uma linha,, e consiste eminteiros separados por espaços.

Restrições

Formato de saída

Retorna a diferença absoluta entre as somas das duas diagonais da matriz como um único inteiro.

Entrada de amostra


11 2 4
4 5 6
10 8 -12
Saída de amostra

15

resolução ( 11 + 5 + (-12) )  +  ( 4 + 5 + 10 ) = 4 - 19 = 15  

*/


array01 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

array02 = [
  [11,2,4],
  [4,5,6],
  [10,8,-12]
]
 


function diagonalDifference(array01){

  sum01 = 0;
  sum02 = 0;
  diferencaTotal = 0;

      for (let index = 0; index < array01.length; index++) {
        
        // pegando posicao valor  11 , 5, -12 
        sum01 = sum01 + array01[index][index]       
        
        // pegando posicao valor  4 , 5, 10 
        sum02 = sum02 + array01[index][array01.length - 1 - index]
       
        // fazendo a difereça do valor
        diferencaTotal = sum01 - sum02

        
      }

      // tranformando a resposta em valor absoluto
      valorAbsoluto = 0;
      if(diferencaTotal < 0)
      {
        valorAbsoluto = Math.abs(diferencaTotal)
        
        return valorAbsoluto
      } else {
        
        // se for positivo retorna o valor normalmente
        return diferencaTotal
      
      }

}

console.log(diagonalDifference(array01))
console.log(diagonalDifference(array02))
