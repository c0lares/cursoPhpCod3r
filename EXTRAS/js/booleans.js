let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = true))//Olha o que tem dentro da variavel... nao olha se a operacao deu certo ou nao
console.log(!!(isAtivo = -3))

console.log('\n')

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))//Olha o que tem dentro da variavel... nao olha se a operacao deu certo ou nao

console.log('\n')

console.log('pra finalizar...')
console.log(!!(''||null||0||' '))//retorna verdadeiro se uma das sentencas for true

let nome = ''
console.log(nome || 'desconhecido')//retorna o verdadeiro... se nome for falso ent retorna desconhecido