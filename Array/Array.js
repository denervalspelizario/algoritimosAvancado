
my_array = [1,2,3,4,'teste', false,true, 0.1]

console.log('acessando o arry')
console.log(my_array)

/console.log('acessando primeiro elemento do array')
console.log(my_array[0])

console.log('acessando o ultimo elemento')
console.log(my_array[my_array.length - 1])

console.log('acessando o penultimo elemento')
console.log(my_array[my_array.length - 2])

console.log('acessando elemento do meio')
console.log(my_array.slice(2, 4))

console.log('vendo quantidade de elementos')
console.log(my_array.length)

my_array2 = [1,7,2,88,10,3,25,34,5]


// descobrindo posicao de um elemento especifico
const position = my_array2.indexOf(2);

console.log("Posição do item de valor 2 usando o indexOf")
console.log(position); // Saída: 2

console.log('ordenando elementos')
// o javascript por padrão, converte os elementos do array em strings e 
//os ordena em ordem lexicográfica (alfabética) então precisa fazer
// essa expressão
console.log(my_array2.sort((a, b) => a - b))

// inserindo dado no final de maneira performatica
console.log("inserindo dado no final de maneira performatica")
my_array2.push(15)
console.log(my_array2)

// inserindo dado no inicio de maneira performatica
my_array2.unshift(15)

// OBS evite usar o splice() que adiciona em uma posicao especifica

// removendo o dado do final de maneira performatica
my_array2.pop()

// inserindo dado no inicio de maneira performatica
my_array2.shift()

// evite usar novamente o splice uma dica seria descobrir qual posicao
// do item que vc quer eliminar e mudar para null por exemplo
my_array2[1] = null;
console.log("Reemovendo item 2 de maneira performatica")
console.log(my_array2)


console.log("Pegando o valor minimo e o valor maximo de um array")
console.log("Valor maximo = " + Math.max(...my_array2))
console.log("Valor minimo = " + Math.min(...my_array2))


console.log("Encontrando a posição de um item especifico")
console.log("A posição do item 7 é = " +  my_array2.indexOf(7))


// criando um array de 0 até 100 em js existe varias maneiras vou fazer 2 jeitos
// formas modernas
let arrayZeroACem = Array.from({ length: 100 }, (_, i) => i + 1);

let arrayZeroACem2 = Array(100).fill().map((_, i) => i + 1);

// forma tradicional
let arrayZeroACem3 = [];
for (let i = 1; i <= 100; i++) {
    arrayZeroACem3.push(i);
}

// criando um array bidimensional
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Array bidimensional(2D)")
console.log(array2D);

console.log("Acessando a primeira linha = " + array2D[0])
console.log("Acessando o primeiro item da primeira linha = " + array2D[0][0])

a = [1 ,2, 3]
b = a
console.log("valor de array a")
console.log(a)
console.log("valor de array b")
console.log(b)

// adicionei 999 na posicao 0 de b
b[0] = 999
console.log("Ao passar 999 na posicao 0 de b alterei os dois arrays")
console.log(a)
console.log(b)


A = [1,2,3]
B = A.slice() // dessa maneira ao alterar o a ou b não muda a outra array
// adicionei 999 na posicao 0 de b
B[0] = 999
console.log("Ao passar 999 na posicao 0 de B e não alterou o array A como anteriormente")
console.log(A)
console.log(B)


// alterando valor de array de uma posição para outra posicao 1 para 2 e vice e versa
console.log("alterando valor de array de uma posição para outra")
let mp = [1, 2, 3, 4]; // criando array
console.log(mp);

// Usando uma variável temporária para trocar os valores
let temp = mp[1]; // criando variavel temporarias
let temp2 = mp[2];
mp[2] = temp; // mudando valor do array com essas variaveis
mp[1] = temp2;
console.log(mp);