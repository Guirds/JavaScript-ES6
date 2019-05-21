var height = 100

var menu = {
  width: 800,
  height: 50, // this
  backgroundColor: '#84E',
  metadeHeight () {
    return this.height / 2 // 25
    // return height / 2   // 50
  }
}
var bg = menu.backgroundColor // #84E

menu.backgroundColor = '#000'
console.log(menu.backgroundColor) // '#000'

// Para adicionar propriedades no objeto

var menu1 = {
  width: 800
}

menu.height = 50
menu.position = 'fixed'

console.log(menu1)

// Desafios
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
  nome: 'Guilherme',
  sobrenome: 'Santos',
  idade: 21,
  nomeCompleto () {
    return `Nome completo: ${this.nome} ${this.sobrenome}`
  }
}
// Crie um método no objeto anterior,
// Que mostre o seu nome completo
/*
eu.nomeCompleto1() {
   return `Nome completo: ${this.nome} ${this.sobrenome}`
} */

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
carro.preco = 3000
console.log('O valor atual do carro é:', carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  atitude (pessoa) {
    if (pessoa === 'homem') {
      return 'Latindo'
    } else {
      return 'Carinhoso'
    }
  }
}

console.log('Agora o cachorro está: ', cachorro.atitude())
