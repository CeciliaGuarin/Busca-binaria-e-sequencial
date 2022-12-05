function buscasequencial (vetor, valor){
    for(let i=0; i < vetor.length; i++){
        if(vetor[i] === valor ) return i
    }
    return -1
}

const vetor = [1, 2, 5, 12, 42, 56]

console.log(buscasequencial(vetor, 42))
console.log(buscasequencial(vetor, 1))
console.log(buscasequencial(vetor, 5))

const nomes = require ('./vetor-nomes.mjs')
    console.log('Posição de JULIO', buscaNomes(nome, 'JULIO'))