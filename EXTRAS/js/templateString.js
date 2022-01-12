const nome = 'Rebeca'
const concat = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!` //interpolcao, 
console.log(concat, template)

//expressoes...
console.log(`1 + 1 = ${1+1}`)

//Funcao
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)