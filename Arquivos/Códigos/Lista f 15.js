//Variável para armazenar o array
let array_num = [2,3,2,5,4,6,8,10,11,12,9,4,6,6];

//Função para montar array com números pares e indice par
function f_pega_num_par_indice_par(array){
    const array_par = [];

    for(let i = 0; i < array.length; i+= 2){
        if((array[i] % 2) == 0){
            array_par.push(array[i]);
        }
    }

    console.log(array_par);
}

//Chamando a função para mostrar o array novo
f_pega_num_par_indice_par(array_num);