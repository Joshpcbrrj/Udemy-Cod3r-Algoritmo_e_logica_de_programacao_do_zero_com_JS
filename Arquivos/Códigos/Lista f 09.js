//Variáveis de item e quantidade
let item = 3;
let quantidade = 4;

//Função para repetir o item pela quantidade determinada (retornando num array)
function f_repetir_item_quantid(item, quantidade) {
    let resultado = [];

    for (let i = 0; i < quantidade; i++){
        resultado.push(item)
    }
    
    console.log(resultado);
}

//Chamando a função para mostrar o array "resultado"
f_repetir_item_quantid(item, quantidade);