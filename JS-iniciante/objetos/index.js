const pessoa = {
  nome: 'Guilherme',
  idade: 25,
  possuiFaculdade: true
}

console.log(pessoa.nome)

const quadrado = {
  lados: 4, // This
  area (lados) {
    return lados * lados
  },
  perimetro (lados) {
    return this.lados * lados
  }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
