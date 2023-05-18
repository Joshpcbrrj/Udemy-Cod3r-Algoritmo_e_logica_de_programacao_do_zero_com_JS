//Variável para armazenar o array
let array_num = [10, "oi", 7, "vida"];

//Função para pegar apenas números do array
function f_pega_numeros(array){
    const num = [];

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == 'number'){
            num.push(array[i])
        }
    }

    console.log(num);
}

//Chamando a função para mostrar array só com números
f_pega_numeros(array_num);