//Variável para armazenar o array
let array_num = [2,4,6,8,10];

//Função para somar todos os valores do array
function f_soma_pos_array(array){
    let soma = 0;
    array.forEach(function(elemento) {
      soma += elemento;
    });

    console.log(`A soma dos elementos do array é ${soma}.`);
}

//Chamando a função para somar os elementos
f_soma_pos_array(array_num);