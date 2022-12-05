/*function binario (){
    
    if(comeco > fim){
         return false
    }

    let mid= Math.floor((comeco + fim)/2);

    if (arr[mid]===x){
        return true
    }

    if(arr[mid]>x){
        return recursiveFunction(arr, x, start, mid-1)
    }else{
        return recursiveFunction(arr, x, mid+1, end)
    }
    let arr = [1, 3, 5, 7, 8, 9]
    let x = 5

    if (recursiveFunction(arr, x, 0, arr.legth-1)){
        document.write("Element found!")

    }else{
        document.write("Element not found!")
    }
    x = 6

    if (recursiveFunction(arr, x, 0, arr.length-1)){
        document.write("Element found!<br>")
    }else{
        document.write("Element not found!<br>")
    }
}
*/

function bBinaria (vetor, valorBusca) {
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        let meio = Math.floor((ini + fim)/2)
    
        if(valorBusca === vetor[meio]){
            return meio 
        }
        else if (valorBusca > vetor[meio]){
            ini = meio + 1
        }
        else {
            fim = meio - 1
        }
    }
    return -1
}
let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log('Posição de 11: ', bBinaria (num, 11))