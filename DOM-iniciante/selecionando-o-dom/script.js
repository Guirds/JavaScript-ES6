/*
const animais = document.getElementById('animais')

console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection[1])

const ul = document.getElementsByTagName('ul')

console.log(ul)

const animais1 = document.querySelector('.animais')
const contato = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
// const linkCSS = document.querySelector('[href^⁼"http://"]')
const primeiraUl = document.querySelector('ul')

// Busca dentro do Ul apenas
const navItem = primeiraUl.querySelector('li')

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

// Nodelist HtmlCollection

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('gri-section')

console.log(gridSectionHTML[0]) // Realtime, agora contem 4 itens
console.log(gridSectionNode[0]) // Estático, agora contem 3 itens

gridSectionNode.forEach((item, index) => {
  console.log(item)
})

// Trasnforma o HtmlCollection em array
const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(item => {
  console.log(item)
})
*/
// Desafios
// Retorne no console todas as imagens do site
const allImg = document.getElementsByTagName('img')
console.log(allImg)

const allImg1 = document.querySelectorAll('img')
console.log(allImg1)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)
// Selecione o último p do site

const lastP = document.getElementsByTagName('p')
console.log(lastP[24])
console.log(lastP[lastP.length - 1])
console.log(lastP[--lastP.length])
