// armazenar funcao em uma variavel
const imprimirSoma = function(a,b){//funcao sem nome
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavel... uma forma reduzida de construir uma funcao
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito

const subtracao = (a,b) => a-b //somente uma linha = nao é necessario {}
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2("2")
