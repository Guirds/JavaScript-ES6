var total1 = 20 + 5 * 2 // 30
var total2 = (20 + 5) * 2 // 50
var total3 = (20 / 2) * 5 // 50
var total4 = 10 + 10 * 2 + 20 / 2 // 40

// Operadores Aritmtéticos Unários

// Incremento
var x = 5
console.log(x++)
console.log(x)

var x = 5
console.log(++x)
console.log(x)

// Decremento
var x = 5
console.log(x--)
console.log(x)

var frase = 'Isso é um teste'
;+frase // NaN
;-frase // NaN

var idade = '28'
;+idade // 28
;-idade // -28

console.log(-idade + 5) // 23

var possuiFaculdade = true
console.log(+possuiFaculdade) // 1

// Desafio
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20 // 35

// Crie duas expressões que retornem NaN
var idade = +'28s'
var nome = 'Guilherme' / 2

console.log(idade)
console.log(nome)
// Somar a String '200' com o número 50 e retornar 250
var n1 = +'200'
var n2 = 50
var n3 = n1 + n2
console.log(n3)

// Incremente o número 5 e retorne o valor incrementado
x = 5
console.log(x++)
console.log(x)

// Como dividir o peso por 2?
var numero = +'80' / 2
var unidade = 'kg'
var peso = numero + unidade // 80kg
console.log(peso)
