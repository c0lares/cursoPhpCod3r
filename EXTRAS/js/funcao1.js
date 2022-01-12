//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // undifined nao é um numero
imprimirSoma(2,3,4,5,6)// ignora depois de pegar 2 itens
imprimirSoma()

//funcao com retorno

function soma(a, b = 1){ //por padrao o valor é 0... se o valor nao for passado
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))