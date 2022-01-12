//coloca o atributo do objeto em uma constante

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logadouro, numero, cep}} = pessoa
console.log(logadouro, numero, cep)