/*
videoGames[0]
videoGames.pop('play') // Remove o último item e retorna ele
videoGames.push('play1') // Adiciona ao final do array
videoGames.length // 3
*/
// For loop

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero)
}

// While Loop

var i = 0
while (i <= 10) {
  console.log(i)
  // i++
  i = i + 5
}
/*
var videoGames = ['ps4', 'xbox', 'play', '3ds']

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
}
 */

/*
var videoGames = ['ps4', 'xbox', 'play', '3ds']
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  if (videoGames[item] === 'play') {
    break
  }
}
*/

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

// Pode ser utilizado qualquer nome nas propriedades
frutas.forEach(qlq => {
  console.log(qlq)
})

frutas.forEach((item, index) => {
  console.log(item, index)
})

frutas.forEach((item, index, array) => {
  console.log(item, index, array)
})

// Sintaxe reduzida
var numero = 0
var maximo = 50

for (; numero < maximo;) {
  console.log(numero)
  numero++
}

// Desafios
// Crio um array com os anos que o brasil ganhou a copa
// 1959, 1962, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002]

// Interaja com um array utilizando um loop
copas.forEach(copa => {
  console.log(`O Brasil ganhou a copa em:${copa}`)
})

// Interaja com o loop abaixo e pare ao chegar em pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta])
  if (frutas[fruta] === 'Pera') {
    break
  }
}

var ultimaFruta = frutas[frutas.length - 1]
