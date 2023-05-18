//Criando variáveis
let a = 8, b = 4;
let operacao, resultado;

//Atribuindo sinal para "operacao"
operacao = "/";

//Tratando as condições possíveis para sinal de "operacao" com operador ternário
resultado = 
    operacao =="+" ? a + b : 
        operacao == "-"? a - b:
            operacao == "*"? a * b: a / b;

//Mostrando "resultado" em tela
console.log(resultado);