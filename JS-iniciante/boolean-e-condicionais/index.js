/*
//Todos os possiveis false
if(false)
if(0) // ou -o
if(NaN)
if(null)
if(undefined)
if('')// ou "" ou ``

//Todos os possiveis true
if(true)
if(1)
if(" ")
if('Gui')
if(-5)
if({})

//! nega operação booleana
if(!true)//fase
if(!1)//false
if(!'')//true
if(!undefined)//true
if(!!' ')//true
if(!!'')//false
*/
// Operações de comparação
10 > 5 // true
10 < 5 // false
10 < 10 // false
10 >= 10 // true
10 == '10' // true
10 === 10 // true
10 === '10' // false
10 !== 15 // true
10 != '10' // false
10 !== '10' // true

// && Compara se uma expressão e a outra é verdadeira
true && true // true
true && false // false
false && true // false
'Gato' && 'Cão' // Cão
5 - 5 && 5 + 5 // 0
'Gato' && false // false
5 >= 5 && 3 < 6 // true

if (5 - 5 && 5 + 5) {
  console.log('verdadeiro')
} else {
  console.log('Falso')
}

var condicional = 5 - 5 && 5 + 5
if (condicional) {
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}

// || Compara se a expressão ou outra é verdadeira
true || true // true
true || false // true
false || true // true
'Gato' || 'Cão' // Gato
5 - 5 || 5 + 5 // 10
'Gato' || false // Gato
5 >= 5 || 3 < 6 // true

// Switch
var corFavorita = 'Azul'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu')
    break
  case 'Amarelo':
    console.log('Olhe para o sol')
  default:
    console.log('Feche os olhos.')
}

// Desafios
// Verifique se a sua idade é maior do que de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual'

var eu = 35
var parente = 35

if (eu > parente) {
  console.log('Minha idade é maior')
} else if (eu < parente) {
  console.log('Minha idade é menor')
} else {
  console.log('As idades são iguais')
}

// Qual valor é retornado da seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2 // 3
console.log(expressao)

// Verifique se as seguinte variáveis são true ou false
var nome = 'Andre'
var idade = 28
var possuiDouturado = false
var empregoFuturo
var dinheiroNaConta = 0

console.log(
  !!nome,
  !!idade,
  !!possuiDouturado,
  !!empregoFuturo,
  !!dinheiroNaConta
)

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro')
} else {
  console.log('Falso') // Verdadeiro
}

if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão') // Cão
} else {
  console.log('Falso')
}

// Compare o total de habitantes do Brasil com a China
var brasil = 207
var china = 1340

if (brasil > china) {
  console.log('O Brasil tem mais')
} else if (brasil < china) {
  console.log('Brasil tem menos')
} else {
  console.log('Mesma coisa')
}
