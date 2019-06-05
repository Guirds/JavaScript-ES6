/*
function Dom () {
  this.seletor = 'li'
  const element = document.querySelector(this.seletor)
  this.ativo = function () {
    element.classList.add('ativo')
  }
}

const lista = new Dom()
lista.seletor = 'ul'
lista.ativo()

const lastLi = Dom()
lista.seletor = 'li:last-child'
lastLi.ativo()
*/

function Dom (seletor) {
  const element = document.querySelector(seletor)
  this.ativo = function (classe) {
    element.classList.add(classe)
  }
}

const lista = new Dom('ul')
lista.ativo('ativo')

const lastLi = new Dom('li:last-child')
lastLi.ativo('ativo')

// Desafios
// Transforme o objeto abaixo em uma  Constructor Function
function Pessoa (nome, idade) {
  this.andar = function (nome) {
    console.log(nome + 'andou')
  }
}

// Crie 3 pessoas
const pessoa1 = new Pessoa()
pessoa1.nome = 'Guilherme'
pessoa1.idade = 21
const pessoa2 = new Pessoa('Bruno', 21)
const pessoa3 = new Pessoa('Maria', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos
