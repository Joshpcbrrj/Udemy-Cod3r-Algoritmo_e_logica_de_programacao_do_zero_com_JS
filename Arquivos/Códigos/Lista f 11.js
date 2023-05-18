//Constante para armazenar o array
const array = [10,9,8,8,8,8,8,4,5,5,1]

//Função para pegar o primeiro e último elemento do array
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    let array_final = [primeiroElemento, ultimoElemento]

    console.log (array_final);
}

//mostrando array do primeiro e último elemento na tela
receberPrimeiroEUltimoElemento(array);

//Mostrando o array antigo com as 2 posições removidas
console.log(array);