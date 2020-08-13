var pessoa = {
nome: 'Gabi',
idade: 18
}
var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado;
    },
  }
  
  quadrado.lados; // 4
  quadrado.area(5); // 25
  quadrado.perimetro(5); // 20
  var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
  }
  Math.PI; // 3.14
  Math.random(); // número aleatório
  
  var pi = Math.PI;
  console.log(pi); // 3.14
  Math.PI; // 3.14
  Math.random(); // número aleatório
  
  var pi = Math.PI;
  console.log(pi); // 3.14

  var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';


var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60
