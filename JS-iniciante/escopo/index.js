/*
function mostrarCarro () {
  var carro = 'Fusca'
  console.log(carro)
}
mostrarCarro() // Fusca
console.log(carro) // Erro, carro undefined
*/
// Quando uma variavel é definida sem CONST, LET, VAR, ela vira uma variavel global
// Podendo ser acessada de qualquer lugar, mesmo sendo declarada em um escopo

function mostrarCarro1 () {
  carro = 'Fusca'
  console.log(carro)
}

mostrarCarro1() // Fusca
console.log(carro) // Fusca

// For loop com let

for (let i = 0; i < 10; i++) {
  console.log(`Número:${i}`)
}

// Desafios
// Por qual motivo o código abaixo retorna um erro?

{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas = 4
}

// variaveis não estão declaradas e a palavra var é uma palavra reservada do linguagens
// console.log(var, marca,portas)

// Como corrigir o erro abaixo?
/*
function somarDois(x){
  const dois = 2;
  return x + dois;
}
function dividirDois(x){
  return x +dois;
}

somarDois(4)
*/
const dois = 2
function somarDois (x) {
  return (x += dois)
}

function dividirDois (x) {
  return (x /= dois)
}

console.log(somarDois(4))
console.log(dividirDois(4))

// O que fazer para total retornar 500
/*  Minha resposta
const numero = 50

for (var n = 0; n < 10; n++) {
  console.log(n)
}

var total = numero * n
console.log(total)
*/

const numero = 50

for (let numero = 0; numero < 10; numero++) {
  console.log(numero)
}

const total = 10 * numero
console.log(total)
