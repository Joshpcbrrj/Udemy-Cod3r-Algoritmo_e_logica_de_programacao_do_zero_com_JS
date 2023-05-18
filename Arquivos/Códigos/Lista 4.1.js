//Criando variável 
let operacao = 2;
let a = 10;
let b = 5;

//criando função para escolher operação
function escolha_operacao(num_op, n1, n2){
    if(num_op == 1){
        f_soma(n1, n2);
    }else if(num_op == 2){
        f_sub(n1, n2);
    }else if(num_op == 3){
        f_multi(n1, n2);
    }else if(num_op == 4){
        f_div(n1, n2);
    }else if(num_op == 5){
        f_mod(n1, n2);
    }else{
        console.log("Operação inválida! Escolha de 1 a 5.")
    }
}

//Função da operação de soma
function f_soma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    console.log(`Operação escolhida é a soma de ${num1} por ${num2}`);
    console.log(`O resultado da operação é: ${resultado}`);
}

//Função da operação subtraçao
function f_sub(num1, num2){
    let resultado;
    resultado = num1 - num2;
    console.log(`Operação escolhida é a subtração de ${num1} por ${num2}`);
    console.log(`O resultado da operação é: ${resultado}`);
}
//Função da operação multiplicação
function f_multi(num1, num2){
    let resultado;
    resultado = num1 * num2;
    console.log(`Operação escolhida é a multiplicação de ${num1} por ${num2}`);
    console.log(`O resultado da operação é: ${resultado}`);
}
//Função da operação divisão
function f_div(num1, num2){
    let resultado;
    resultado = num1 / num2;
    console.log(`Operação escolhida é a divisão de ${num1} por ${num2}`);
    console.log(`O resultado da operação é: ${resultado}`);
}
//Função da operação modulo
function f_mod(num1, num2){
    let resultado;
    resultado = num1 % num2;
    console.log(`Operação escolhida é resto da divisão de ${num1} por ${num2}`);
    console.log(`O resultado da operação é: ${resultado}`);
}

//Chamando função "escolha_operacao" e passando os parametros (nº da operação, A e B)
escolha_operacao(operacao, a, b);