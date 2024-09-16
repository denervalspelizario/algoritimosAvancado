/*

Neste desafio, você precisa calcular e imprimir a soma dos elementos de uma matriz, tendo em mente que alguns desses números inteiros podem ser bem grandes.

Descrição da função

Complete a função aVeryBigSum no editor abaixo. Ela deve retornar a soma de todos os elementos do array.

aVeryBigSum tem o(s) seguinte(s) parâmetro(s):

int ar[n] : uma matriz de inteiros.
Retornar

longo : a soma de todos os elementos do array
Formato de entrada

A primeira linha da entrada consiste em um inteiro.
A próxima linha contéminteiros separados por espaços contidos na matriz.

Formato de saída

Retorna a soma inteira dos elementos na matriz.

Restrições


Entrada de amostra

5
1000000001 1000000002 1000000003 1000000004 1000000005

Saída

5000000015*/


arrarASomar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]


function AVeryBigSum(array){

  sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum
};


console.log(AVeryBigSum(arrarASomar))
