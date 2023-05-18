//Criando variáveis para armazenar as 3 notas
let nota1 = 0;
let nota2 = 3;
let nota3 = 3;

//Função para exibir a menor nota
function f_pega_nota_menor(n1, n2, n3){
    return n1 <= n2 ? n1: n2 <= n3 ? n2: n3;  
}
//Função para somar o valor das notas
function soma_notas(n1, n2, n3){
    return n1+ n2 + n3 
}
//Função para calcular média do aluno desconsiderando a menor nota
function f_calc_media(soma_notas, valor_menor_nota){
    return (soma_notas - valor_menor_nota) / 2;  
}
//Função para definir conceito de acordo com média de notas
function f_conceituando_aluno(media){
    if(media >= 7){
        return `Aluno aprovado! Média: ${media}`
    }else if (media >= 4){
        return `Aluno em recuperação! Média: ${media}`
    }else {
        return `Aluno reprovado! Média: ${media}` 
    }
}

//Armazenando soma de notas 
let s_notas = soma_notas(nota1, nota2, nota3);
//Armazenando menor nota
let menor_nota = f_pega_nota_menor(nota1, nota2, nota3);
//Armazenando média 
let media_aluno = f_calc_media(s_notas, menor_nota );
//Armazenando conceito do aluno
let status_aluno = f_conceituando_aluno(media_aluno);

//Mostrando dados na tela
console.log(`As 3 notas são: ${nota1}, ${nota2}, ${nota3}.`)
console.log(`${menor_nota} é a menor nota e será desconsiderada.`)
console.log(`o conceito final é -> ${status_aluno}.`)