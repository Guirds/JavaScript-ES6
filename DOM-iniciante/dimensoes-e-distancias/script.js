const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight // height total, mesmo dentro de scroll
console.log(height)
// Para utilizar o width, basta substituir pelo height
listaAnimais.offsetHeight // height + padding + border
listaAnimais.clientHeight // height + padding

const animaisTop = listaAnimais.offsetHeight
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')

const h2left = primeiroh2.offsetLeft

const h2rect = primeiroh2.getBoundingClientRect()

console.log(h2rect.top)

if (h2rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerHeight,
  window.outerWidth,
  window.pageYOffset
)

const small = window.matchMedia('(max-width: 600px)').matches

if (small.matches) {
  console.log('Mobile')
} else {
  console.log('Desktop')
}

// Desafios
// Verifique a distânca da primeira imagem
// em relação ao topo da página
const distImage = document.querySelector('img')
const distTop = distImage.offsetTop
console.log(distTop)

// Retorne a soma da largura de todas as imagens
function somaImagens () {
  const allImage = document.querySelectorAll('img')
  let soma = 0
  allImage.forEach(item => {
    soma += item.offsetWidth
  })
  console.log(soma)
}

window.onload = function () {
  somaImagens()
}

// verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log('Possui boa acessibilidade')
  } else {
    console.log('Não possui boa acessibilidade')
  }
})

// Se o browser for menor que 720px
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)').matches

if (browser) {
  const classe = document.querySelector('.menu')

  classe.classList.add('menu-mobile')
  console.log('Foi adicionado ')
} else {
  console.log('Não foi adicionado')
}
