/*
const img = document.querySelector('img')

img.addEventListener('click', () => {
  console.log('Clicou')
})

callback1 = () => console.log('Clicou')
callback = event => console.log(event) // e = event
// callback = () => console.log()

img.addEventListener('click', callback1)
/*

const animaisLista = document.querySelector('.animais-lista')

executarCallback = event => {
  const currentTarget = event.currentTarget // this
  const target = event.target // onde o clique ocorreu
  const type = event.type // tipo de evento
  const path = event.path //
  console.log(currentTarget, target, type, path)
}

// animaisLista.addEventListener('click', executarCallback)

// Previnindo evento, nesse caso impede que o usuario ao clicar no link externo seja direcionado
const linkExterno = document.querySelector('a[href^="http"]')

handleLinkExterno = event => {
  event.preventDefault()
  console.log(event)
}

linkExterno.addEventListener('click', handleLinkExterno)

// Diferentes Eventos
/*
const h1 = document.querySelector('h1')

callback = event => {
  console.log(event.type, event)
}

h1.addEventListener('click', callback)
h1.addEventListener('mouseenter', callback) // Quando clica na img
window.addEventListener('scroll', callback) // Scroll do mouse
window.addEventListener('resize', callback) // Diminuir e aumetar tela
window.addEventListener('keydown', callback) // Identifica qual tecla foi clicada
*/
/*
// Mudando background da aplicação
handleKeyboard = event => {
  if (event.key === 'a') {
    document.body.classList.toggle('azul')
  }
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

handleImg = event => {
  console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach(img => {
  img.addEventListener('click', handleImg)
})
*/
// Desafios
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova
// dos demais itens caso eles possuam a mesma. Previna
// O comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]')
console.log(links)

handleLink = event => {
  event.preventDefault()
  links.forEach(link => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

links.forEach(itens => {
  itens.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body
// ao clique mostre exatamente quais elementos estão sendo clicados
/*
const todosElementos = document.querySelectorAll('body *')

handleElemento = event => {
  console.log(event.currentTarget)
}

todosElementos.forEach(elemento => {
  elemento.addEventListener('click', handleElemento)
})

const All = document.body.addEventListener('click', item => {
  console.log('Clicou', item.target)
})
*/
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const todosElementos = document.querySelectorAll('body *')

handleElemento = event => {
  console.log(event.currentTarget.remove())
}

todosElementos.forEach(elemento => {
  elemento.addEventListener('click', handleElemento)
})
*/
// Se o usuário clicar na tecla (t), aumente todo o texto do site

handleKeyBoard = event => {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleKeyBoard)
