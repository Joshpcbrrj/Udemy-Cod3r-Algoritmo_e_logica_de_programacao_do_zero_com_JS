//Variável para armazenar os 2 números
let num_a = 0;
let num_b = 0;

//Função para multiplicar os números sem usar o sinal "*" de multiplicar
function f_multiplica_a_por_b(na, nb){
    let result = 0;

    if(na >= 0 && nb >=0){
        for(let i = 0; i < nb; i++){
            result += na;
        }
        
        console.log(`A multiplicação de ${na} por ${nb} é ${result}`);
    }else{
        console.log(`Erro! Um dos números ou os 2 números são menores que zero.`);
    }   
}

//Chamando a função para multiplicar númeroA por numeroB
f_multiplica_a_por_b(num_a, num_b);