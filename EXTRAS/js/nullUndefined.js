let valor //nao inicializada = undefined
console.log(valor)

valor = null //nao esta apontando pra nenhum endereco de memoria e nao tem nenhum valor, variavel vazia
console.log(valor)
// console.log(valor.toString()) -> TypeError: Cannot read properties of null (reading 'toString')

const prduto = {}
console.log(prduto.preco) // preco n esta definido = undefined
//console.log(prduto.preco.a) // preco n esta definido -> TypeError: Cannot read properties of undefined (reading 'a')

prduto.preco = 3.50
console.log(prduto)

prduto.preco = undefined //nao atribuir undefined
console.log(!!prduto.preco)
console.log(prduto)

prduto.preco = null //produto sem preco
console.log(!!prduto.preco)
console.log(prduto)