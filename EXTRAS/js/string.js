const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// retorna o valor do caractere presente na terceira posicao da string na tabela ASCII ou UNICODE
console.log(escola.indexOf('C'))

console.log(escola.substring(1))// = oder // a aprtir do indice 1
console.log(escola.substring(0,3))// = Cod // do indice 0 ate o anterior do indice 3

console.log('Escola'.concat(' ').concat(escola).concat('!'))
console.log('Escola' + ' ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro filho da puta vai se fuder'.split(','))