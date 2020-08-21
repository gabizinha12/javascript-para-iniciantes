var videogames = ['Switch', 'ps4', 'Xbox']

// var ultimoItem = videogames.pop()

videogames.push('3DS')

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  // Retorna de 0 a 9 no console
  var i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
  // Retorna de 0 a 9 no console
  var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
  for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
  }
  
  var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}
videoGames.forEach(function(item) {
  console.log(item)
})
var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']
frutas.forEach(function(fruta, index) {
  console.log(fruta,index)
})