//Variável para armazenar quantidade de vezes
let quant_vezes = 5;

//Função para imprimir o "+" pela quantidade de vezes
function f_impr_sinais(quantidade) {
    let array_d_mais = new Array(quantidade).fill('+').join('');
    console.log(array_d_mais)
}

//Chamando a função para mostrar os sinais de "+"
f_impr_sinais(quant_vezes);