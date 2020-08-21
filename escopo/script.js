function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if(true) {
  var mes = 'Dezembro'
  console.log(mes)
}
console.log(mes)  // usar let para n vazar o escopo

for(var i = 0;i < 10; i++) {
  console.log(`Numero ${i}`)
}