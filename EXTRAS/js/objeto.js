//JAVASCRIPT É UMA LINGUAGEM MULTIPARADIGMA(oo, procedural, funcional...)
const produto1 = {}  //{} = representa um objeto
produto1.nome = 'Celular Ultra Mega' // valor criado dinamicamente no objeto
produto1.preco = 4998.90
produto1['Desconto Legal'] = 0.40 // NÃO USAR ATRIBUTOS COM ESPACO

console.log(produto1)

const produto2 = { //estrutura aninhada
    nome:'Camisa polo',
    valor: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(produto2)
 