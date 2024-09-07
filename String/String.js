let s = 'minha primeira string'
console.log("Imprimindo string")
console.log(s)

let ten = 'teste'.repeat(10);
console.log('Imprimindo string ten com repeat(10)')
console.log(ten)

let alterandoValor = 'vavalpelizario'.replace('vaval','dener')
console.log("Imprimindo alterandoValor que altera uma parte de um string com  .replace")
console.log(alterandoValor)

console.log("deixando string toda maiuscula e minuscula")
let nome = 'Denerval'
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())

console.log("Verificando começo e fim de uma string")
console.log(nome.startsWith('Den')) // true
console.log(nome.endsWith('val')) // true

console.log("Separando uma string com split")
let d = "teste1, teste2, teste3"
console.log(d.split(','))   // [ 'teste1', ' teste2', ' teste3' ]

console.log("Tirando espaços de uma string com trim() do inicio e final")
let n = " Denerval "
console.log(n.trim())

console.log("Tirando todos os espaços do MEIO de uma string");
let y = "Dener val";
console.log(y.replace(/\s+/g, '')); // "Denerval"

console.log("Deixando a primeira letra em maiusculo")
let x = 'denerval'
console.log(x.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())) // "Denerval"


let arrayNumeros = '0123456789'
console.log(arrayNumeros[0]) // 0
console.log(arrayNumeros[1]) // 1
console.log(arrayNumeros[2]) // 2
console.log(arrayNumeros[3]) // 3