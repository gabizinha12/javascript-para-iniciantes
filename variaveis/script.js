var nome = 'Gabi'
var idade = 19
console.log(nome, idade)

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco
console.log(totalPreco)

var sobrenome = 'Lima', 
cidade = 'Paraná'
console.log(sobrenome, cidade)

var semDefinir;
console.log(semDefinir)

// console.log(AindaNaoDefini)

// os nomes podem iniciar com $, _ ou letras
// podem conter numeros mas nao iniciar com eles
// case sensitive
// nao usar palavras reservadas
// camelCase

// Inválido
// var §nome;
// var function;
// var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// hoisting 
// são movidas pra cima do código mas o valor atribuido  nao
console.log(nome)
var nome = 'Gabi'
var profissao = 'Dev'
console.log(profissao)


var comida;
console.log(comida)
comida = 'Pizza'
console.log(comida)


let time = 'Vasco'
time = 'Flamengo'
console.log(time)