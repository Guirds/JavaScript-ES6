function Carro (marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro()

fiat.marca = 'Fiat'
fiat.preco = 2000

function Carro2 (marcaAtribuida, precoInicial) {
  const taxa = 1.2 // this.taxa
  const precoFinal = precoInicial * taxa // this.taxa
  this.marca = marcaAtribuida
  this.preco = precoFinal
}

const corsa = new Carro2('Corsa', 4000)
