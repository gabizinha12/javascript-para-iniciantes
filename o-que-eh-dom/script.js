// window.alert('bla')

const href = window.location.href;
console.log(href)

const h1Selecionado = document.querySelector('h1')

function callbackh1() {
  console.log('clicou em', h1Selecionado)

}


h1Selecionado.addEventListener('click',callbackh1)