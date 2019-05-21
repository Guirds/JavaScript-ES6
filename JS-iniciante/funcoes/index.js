function areaQuadrado (a, b) {
  return a * b
}

console.log(areaQuadrado(5))

function pi () {
  return 3.14
}
var total = 5 * pi()
console.log(pi())
console.log(pi)

function imc (peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

console.log(imc(80, 1.8))

function corFavorita (cor) {
  if (cor === 'Azul') {
    return 'Eu gosto do céu'
  } else if (cor === 'verde') {
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto dessa cor'
  }
}
console.log(corFavorita('verde'))

addEventListener('click', function () {
  console.log('Oi')
})
