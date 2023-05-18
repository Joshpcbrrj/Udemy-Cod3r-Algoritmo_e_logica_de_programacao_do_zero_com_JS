//Criando variável para armazenar nota do aluno
let nota_aluno = 10;

//Estrutura "switch" para dar avaliação de acordo com a nota
switch(nota_aluno){
    case 10:
        console.log(`Sua nota é ${nota_aluno}. O conceito é A+.`);
        break
    case 9:
        console.log(`Sua nota é ${nota_aluno}. O conceito é A.`);
        break
    case 8:
        console.log(`Sua nota é ${nota_aluno}. O conceito é B+.`);
        break
    case 7:
        console.log(`Sua nota é ${nota_aluno}. O conceito é B.`);
        break
    case 6:
        console.log(`Sua nota é ${nota_aluno}. O conceito é C+.`);
        break
    case 5:
        console.log(`Sua nota é ${nota_aluno}. O conceito é C.`);
        break
    case 4:
        console.log(`Sua nota é ${nota_aluno}. O conceito é D+.`);
        break
    case 3:
        console.log(`Sua nota é ${nota_aluno}. O conceito é D.`);
        break
    case 2:
        console.log(`Sua nota é ${nota_aluno}. O conceito é E+.`);
        break
    case 1:
        console.log(`Sua nota é ${nota_aluno}. O conceito é E.`);
        break
    case 0:
        console.log(`Sua nota é ${nota_aluno}. O conceito é F.`);
        break
    default:
        console.log(`Nota inválida! A nota só pode ser de 10 a 0.`);
}