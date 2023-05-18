//Criando variáveis
let a = 28, b = 10;
let op = "mod"; 
let resultado; 

//Função que respode a operação desejada em "op"
function escole_op(operacao){
    if(operacao == "soma"){
        let resul = a + b;
        resultado = "A soma de A por B é: " + resul
    }else if(operacao == "sub"){
        let resul = a - b;
        resultado = "A subtração de A por B é: " + resul
    }else if(operacao == "mult"){
        let resul = a * b;
        resultado = "A multiplicação de A por B é: " + resul
    }else if(operacao == "div"){
        let resul = a / b;
        resultado = "A divisão de A por B é: " + resul
    }else if(operacao == "mod"){
        let resul = a % b;
        resultado = "O resto da divisão de A por B é: " + resul
    }else{
        resultado = "Erro! Você escolheu uma operação inválida"
    }
}

//Chamando a função e passando a "op" como parâmetro
escole_op(op)

//Mostrando "resultado na tela"
console.log(resultado);