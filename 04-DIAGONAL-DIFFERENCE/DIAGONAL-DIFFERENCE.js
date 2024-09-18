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


array01 = [11,2,4]
array02 = [4,5,6]
array03 = [10,8,-12]


function diagonalDifference(array01, array02, array03){

  sum01 = 0;
  sum02 = 0;
  sumTotal = 0;


  // são todos tamanhos iguais?
  if(array01.length === array02.length && array02.length === array03.length)
  {
      for (let index = 0; index < array01.length; index++) {
        

        sum01 = sum01 + array01[index]
        sum01 = sum01 + array02[index + 1]
        sum01 = sum01 + array03[index + 2]

        sum02 = sum02 + array01[index + 2]
        sum02 = sum02 + array02[index + 1]
        sum02 = sum02 + array03[index]

        sumTotal = sum01 - sum02
        return sumTotal
        
      }
  }

}

console.log(diagonalDifference(array01, array02, array03))