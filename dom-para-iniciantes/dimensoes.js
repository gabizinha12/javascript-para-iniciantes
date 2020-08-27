const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight;

const animaisTop = listaAnimais.offsetTop;

const raposah2 = document.querySelector('h2');
const h2left = raposah2.offsetLeft;

const rect = raposah2.getBoundingClientRect()


// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((imagem) => {
        soma = soma + imagem.offsetWidth;
    })
}
window.onload() = function () {
    somaImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelector('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log('Não possui boa acessibilidade')
    }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;
if(small) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}