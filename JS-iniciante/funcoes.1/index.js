function imc(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

function imc(peso, altura) {
  const imc = peso / (altura * altura)
  console.log(imc)
}

imc(80, 1.8)

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if (idade >= 60) {
    return true
  } else {
    false
  }
}
console.log(terceiraIdade('Oi'))

var totalPaises = 193

function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(faltaVisitar(20))

var profissao = 'Dev'

function dados() {
  var nome = 'Gui'
  var idade = 20
  function outrosDados() {
    var idade = 21
    var endereco = 'Brasil'
    return `${nome},${idade},${endereco},${profissao}`
  }
  return outrosDados()
}

console.log(dados())

//Desafios
//Crie uma função para verificar se um valor é Truthy

function valor(n) {
  if (typeof n === 'number') {
    return 'verdadeiro'
  } else {
    return 'Digite um numero'
  }
}

function isTrue(dado) {
  return !!dado
}

console.log(valor(10))
console.log(isTrue(10))

//Crie uma função matemática que retorne o perimetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(n, n1, n2, n3) {
  return n + n1 + n2 + n3
}
console.log(perimetro(4, 6, 2, 4))

function perimetroQuadrado(lado) {
  return lado * 4
}

console.log(perimetroQuadrado(5))

//Crie uma função que  retorne o seu nome completo
//ela deve possuir os parametros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  const nomeCompleto = nome + ' ' + sobrenome
  return `Seu nome completo é: ${nomeCompleto}`
}

console.log(nomeCompleto('Guilherme', 'Santos'))

function nomeCompleto1(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto1('Guilherme', 'Santo'))

//Crie uma função que verifique se um número é par
function par(numero) {
  if (numero % 2 === 0) {
    return 'É par'
  } else {
    return 'É impar'
  }
}

console.log(par(110))

//Crie uma função que retorn o tipo de
//dado do argumento passado nela (typeof)
function verificar(variavel) {
  const verificar = typeof variavel
  return `O tipo de dado informado é ${verificar}`
}

console.log(verificar(true))

//addEventListener é uma função nativa do JS
//o primeiro parâmetro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scroll' ocorrer

addEventListener('scroll', function() {
  console.log('Guilherme')
})

//Corrija o erro abaixo
const Paises = 193

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados}, para visitar`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} o total de ${totalPaises} paises`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))
