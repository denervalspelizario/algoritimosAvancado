
/*
Alice e Bob criaram um problema cada para o HackerRank. Um revisor classifica os dois desafios, concedendo pontos em uma escala de 1 a 100 para três categorias: clareza do problema , originalidade e dificuldade .

A classificação para o desafio de Alice é o tripleto a = (a[0], a[1], a[2]) , e a classificação para o desafio de Bob é o tripleto b = (b[0], b[1], b[2]) .

A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0] , a[1] com b[1] e a[2] com b[2] .

Se a[i] > b[i] , então Alice recebe 1 ponto.
Se a[i] < b[i] , então Bob recebe 1 ponto.
Se a[i] = b[i] , então nenhuma pessoa recebe um ponto.
Pontos de comparação são o total de pontos que uma pessoa ganhou.

Dados a e b , determine seus respectivos pontos de comparação.

Exemplo

a = [1, 2, 3]
b = [3, 2, 1]
Para os elementos *0*, Bob recebe um ponto porque a[0] .
Para os elementos iguais a[1] e b[1] , nenhum ponto é ganho.
Finalmente, para os elementos 2 , a[2] > b[2] então Alice recebe um ponto.
A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob em segundo.

Descrição da função

Complete a função compareTriplets no editor abaixo.

compareTriplets tem o(s) seguinte(s) parâmetro(s):

int a[3] : Avaliação do desafio de Alice
int b[3] : Avaliação do desafio de Bob
Retornar

int[2] : A pontuação de Alice está na primeira posição e a pontuação de Bob está na segunda.
Formato de entrada

A primeira linha contém 3 inteiros separados por espaços, a[0] , a[1] e a[2] , os respectivos valores no tripleto a .
A segunda linha contém 3 inteiros separados por espaços, b[0] , b[1] e b[2] , os respectivos valores no tripleto b .

Restrições

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

Entrada de amostra 

5 6 7 
3 6 10

Saída de amostra 

1 1
*/

notas1 = [17, 28, 30]
notas2 = [99,16,8]


function CompareTheTriplets(a,b)
{
  resultado = [0,0]

  if(a.length === b.length)
  {
    primeiroUser = 0;
    segundoUser = 0;

    for (let index = 0; index < a.length; index++) {
      
      if(a[index] > b[index]){
        primeiroUser++
      } 

      if(a[index] < b[index]){
        segundoUser++
      }
    }

    resultado[0] = primeiroUser 
    resultado[1] = segundoUser 
    return  resultado
  
  } else {
    console.log("Arrays com tamanhos diferentes")
  }
}


console.log(CompareTheTriplets(notas1, notas2))

