/*

SOMA SIMPLES DE ARRAY


Declaração do problema
Dado um conjunto de inteiros, encontre a soma dos seus elementos.

Por exemplo, se a matriz $ar = [1,2,3]1+2+3 =6, então retorne 6.

Descrição da função
Complete a função simpleArraySum no editor abaixo. Ela deve retornar a soma dos elementos do array como um inteiro.

simpleArraySum tem o(s) seguinte(s) parâmetro(s):

ar: uma matriz de inteiros

Sample Input : 1 2 3 4 10 11
Sample Output : 31
*/

// Resposta pessoal 
let sum = 0;
let arrayQueSeraSomado = [1,2,3,4,10,11]

function simpleArraySum(array)
{
  for(let i = 0; i < array.length; i++)
    {
      sum = sum + arrayQueSeraSomado[i]
    }

  return sum
}



console.log(simpleArraySum(arrayQueSeraSomado))

// Resposta instrutor
