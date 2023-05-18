//Criando variável para armazenar "idade"
let idade = 33;

//Função para converter anos de vida em dias
function convert_idade_em_dias(idade){
    let convercao = idade * 365;
    console.log(`${idade} anos é o mesmo que ${convercao} dias`);
}

//Chamando a função para converter idade para dias 
convert_idade_em_dias(idade);