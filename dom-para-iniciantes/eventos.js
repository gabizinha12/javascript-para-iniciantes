const img = document.querySelector('img')

img.addEventListener('click', function () {
    console.log('clicou')
})

const img = document.querySelector('img');
function callback() {
    console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function () {
    console.log('Clicou');
})
img.addEventListener('click', () => {
    console.log('Clicou');
})

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

function handleLink(event) {
    event.preventDefault();
   linksInternos.forEach((link)=> {
       link.classList.remove('ativo')
   })
 }
const linksInternos = document.querySelectorAll('a[href^="#"]')
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

todosElementos.forEach((elemento)=> {
    elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
