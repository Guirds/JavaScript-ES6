const menu = document.querySelector('.menu')

console.log(menu.className) // String
// menu.classList('ativo') // Lista de classes
// menu.classList.add('ativo')
// menu.classList.add('ativo', 'mobile') // Duas classes
// menu.classList.remove('ativo')
// menu.classList.toggle('ativo') // adiciona/remove a classe
// menu.classList.contains('ativo') // true ou false
// menu.classList.replace('ativo', 'inativo')

const animais = document.querySelector('.animais')

console.log(animais.attributes)

// const img = document.querySelector('img')

// const srcImg = img.getAttribute('alt')

// img.setAttribute('alt', 'É uma raposa')

// console.log(srcImg)

// Desafios
// Adicione a classe ativo a todos os itens do menu
const addAtivo = document.querySelectorAll('.menu a')
addAtivo.forEach(item => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

addAtivo.forEach(item => {
  item.classList.remove('ativo')
})

addAtivo[0].classList.add('ativo')

// Verifique se as imagens possuem atributo alt
const img1 = document.querySelectorAll('img')

img1.forEach(item => {
  const possuiAtributo = item.hasAttribute('alt')
  console.log(item, possuiAtributo)
})
console.log()

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'Alterado')
console.log(link)
