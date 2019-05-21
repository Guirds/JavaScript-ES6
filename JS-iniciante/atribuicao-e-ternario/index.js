var x = 5
var y = 10

x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)

var idade = 21

var podebeber
podebeber = idade >= 18 ? 'Pode beber' : 'Não pode beber'

console.log(podebeber)

// Maneira simplificada de escrever if/else
var possuiFaculdade = true

if (possuiFaculdade) console.log('Possi faculdade')
else console.log('Não possui faculdade')

// Desafios
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000

scroll += 500

console.log(scroll)

// Atribua true para a variável darCredito,
// Caso o cliente possua carro e casa.
// E false caso o contrário.

const cliente = {
  casa: true,
  carro: true,
  darCredito: false
}

if (cliente.casa && cliente.carro) {
  darCredito = true
  console.log('Cliente com crédito aprovado')
  console.log(darCredito)
} else {
  console.log('Não foi possivel aprovar o crédito')
}
