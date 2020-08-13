// function areaQuadrado(lado) {
//     return lado * lado;
//   }
  
//   areaQuadrado(4) // 16
//   areaQuadrado(5) // 25
//   areaQuadrado(2) // 4
  function areaQuadrado(lado) {
      return lado * lado;
  }
  console.log(areaQuadrado(2))

  function pi() {
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7

  // peso e altura são os parâmetros
function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc;
}
imc(20, 1.8) // undefined 
console.log(imc(20, 1.8))// imc e undefined

function corFavorita(cor) {
if(cor === 'Azul') {
    return 'Eu gosto do céu'
} else if(cor === 'Verde') {
    return 'Eu gosto de mato'
} else {
    return 'Eu não gosto de cores'
}
}

addEventListener('click', function() {
    console.log('oi')
})

addEventListener('click', function() {
    console.log('Clicou');
  });
  // A função possui dois argumentos
  // Primeiro é a string 'click'
  // Segundo é uma função anônima
  
function terceiraIdade() {
    if(typeof idade !== 'Number') {
     return 'Por favor preencha um número'
    }
    else if(idade >= 60) {
        return true
    } else {
        return false;
    }
    console.log(idade)
}
function faltaVisitar(paises) {
var totalPaises = 193
return `Falta visitar ${totalPaises - paises} países`
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
