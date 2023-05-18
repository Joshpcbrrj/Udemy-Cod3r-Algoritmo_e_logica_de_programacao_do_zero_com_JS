//Variável para armzenar o array
let array_num = [5,6];

//Função para calcular a média do array
function calc_media_array(array){
    let total = 0;

    array.forEach(element => {
        total += element;
    });

    total = total / array.length;

    console.log(`A média do array é ${total}`)
}

//Chamando a função para calcular a média do array
calc_media_array(array_num);