//Criando variáveis de horas de trabalho e valor da hora
let horas_trabalhadas = 10;
let preco_hora = 10;

//Criando função para calcular o valor de horas trabalhadas por preço da hora
function f_salario_total(horas, preco){
    let salario = horas * preco;
    console.log(`Horas de trabalho ${horas}/ preço por hora ${preco}`);
    console.log(`O salario total a ser recebido é R$${salario} reais.`);
}

//Chamando a função para gerar o salario final
f_salario_total(horas_trabalhadas, preco_hora);