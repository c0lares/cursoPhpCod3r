let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)//a variavel let nao é sobescrita... o let dentro de um escopo é usavel somente dentro do proprio escopo
}
console.log('fora = ',numero)