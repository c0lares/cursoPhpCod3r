const a = {name: 'Teste'}// aponta p um lugar na memoria
const b = a //aponta pro mesmo lugar, copia por referencia
console.log(a, b)

b.name = 'Opa'//altera os dois resultados
console.log(a, b)

let c = 3
let d = c //valor primitivo é feito uma copia por valor... nao apontando para outro endereco
console.log(c, d)
d++
console.log(c, d)