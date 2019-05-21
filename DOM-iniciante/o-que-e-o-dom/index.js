const href = window.location.href

if (href === 'http://127.0.0.1:5500/DOM-iniciante/o-que-e-o-dom/') {
  console.log('É igual')
}

const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList

callbackh1 = () => {
  console.log('Clicou em', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', callbackh1)

// Desafios
// Retorne o url da página atual utilizando o objeto window

const url = window.URL

console.log(url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo')

// Retorna a linguagem do navegador
const linguagem = window.navigator.language

console.log(linguagem)
// Retorne a lagura da janela
const largura = window.innerWidth
console.log(largura)
