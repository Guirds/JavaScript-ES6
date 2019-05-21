/*
const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')
console.log(h1.innerHTML) // Altera apenas o que tem dentro
console.log(h1.outerHTML) // Altera toda a estrutura

h1.outerHTML = '<p>Novo Titulo</p>'

// Transversing
// Como navegar pelo DOM, utilizando suas propriedades e métodos

const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement )// Pai
console.log(lista.parentElement.parentElement )// pai do pai, e por assim vai
console.log(lista.previousElementSibling )// Elemento acima
console.log(lista.nextElementSibling )// elemento abaixo
console.log(lista.children)
console.log(lista.children[0] )// primeiro filho
console.log(lista.children[--lista.children.length] )// último filho
console.log(lista.querySelectorAll('li') // todas as LI's
console.log(lista.querySelector('li:last-child')  //último filho, seletor CSS
*/

// Manipulando Elementos
// É possivel mover elementos no DOM com métodos Node

/*
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

contato.appendChild(lista) // move a lista para o final de contato
contato.insertBefore(lista, titulo) // insere a lista antes de titulo
contato.removeChild(titulo) // remove titulo de  contato
contato.replaceChild(lista, titulo) // substitui titulo por list

const novoh1 = document.createElement('h1')
novoh1.innerText = 'Novo Titulo'
novoh1.classList.add('titulo')

contato.appendChild(novoh1)

// Clone elemento
const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true) // O valor true é necessário para herdar todos os filhos do elemento, sem ele vamos clonar apenas o elemento em si

cloneH1.classList.add('azul')
faq.appendChild(cloneH1)
*/

// Desafios
// Duplique o menu e adicione ele no copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
console.log(copy)
console.log(menu)

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)
// Selecione o primeiro DT da dl de Faq
// const faq1 = document.querySelector('dt')

const faq = document.querySelector('.faq')
console.log(faq)
const primeiroDt = faq.querySelector('dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling
console.log(proximoDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
