// Elementos do DOM

var btn = document.querySelector('.btn')
btn.classList.add('azul') // Adiciona a classe azul
btn.innerText // 'Clique'
btn.addEventListener('click', function () {
  console.log('Clicou')
})

// Desafios
// nomeie 3 propriedades ou métodos de strings
var nome = 'Guilherme'
nome.toString()
nome.valueOf()
nome.lenght()

// nomeie 5 propriedades ou métodos de elementos DOM
var button = document.querySelector('.teste')
button.getAttribute()
button.insertBefore()
button.scrollBy()
button.scrollIntoView()
button.setPointerCapture()

// Busque na web um objeto(método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CRTL + V
