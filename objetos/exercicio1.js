// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Gabrielle',
    sobrenome: 'Pereira',
    
}
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
    return `${nome} + ${sobrenome}`
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
    raça: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
     if(pessoa === 'homem') {
         return 'Latir'
     } else {
         return 'Nada'
     }
    }
}
  
