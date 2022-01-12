const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))//com 2 casas decimais, nao muda o valor apenas mostra com 2 casas
console.log(media.toString(2))//para binario 
console.log(typeof media)
console.log(typeof Number)