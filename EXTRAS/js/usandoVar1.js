//OU O VAR É GLOBAL OU É SOMENTE DA FUNCAO
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
            
        }
    }
}
console.log(sera)//no caso da variavel var ela fica disponivel fora de um escopo(bloco de codigo)

function teste(){
    var local = 123
}

//console.log(local)//no escopo de uma funcao nao fica disponivel... fora de uma funcao ela é global
teste()
