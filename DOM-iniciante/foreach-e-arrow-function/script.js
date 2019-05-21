/*
const imgs = document.querySelectorAll('img')

imgs.forEach((item, index, array) => {
  console.log(item) // Returna todos os itens
  console.log(index) // O nuúmero do index
  console.log(array) // a Array completa
})

// Transformando um HTMLcollection em array
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(item => {
  console.log(titulosArray)
})
*/

// Desafios
// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)
// Mostre o texto dos parágrafos no console
paragrafos.forEach(item => console.log(item))
// Como corrigir os erros abaixo:
const imgs1 = document.querySelectorAll('img')

imgs1.forEach((item, index) => console.log(item, index))

let i = 0
imgs1.forEach(() => console.log(i++))

imgs1.forEach(() => console.log(i++))
