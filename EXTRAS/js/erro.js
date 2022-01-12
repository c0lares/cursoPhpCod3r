function tratarErro(erro){
    throw new Error('Erro de processamento')
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCas() + '!!!')    
    }catch(e){
        tratarErro(e)
    }
    finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)