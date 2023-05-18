# Lista 4 - Funções

1 - Crie 4 funções, uma para cada operação elementar da matemática e uma condicional que escolherá qual das operações será executada.

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%204.1.js)

<br>

2 - Crie uma função que retorne a nota a partir de uma letra digitada (Padrão: A - La / B- Si/ C - Do / D - RE/ E - Mi / F - Fa / G Sol), e uma variável que recebe essa letra. Ao final, mostre a nota no console.

<details>
<summary>Código</summary>

```jsx
//Criando variáveis
let letra = "c";

//Função que retorna a nota de acordo com a letra
function f_return_note(letra){
    switch(letra){
        case "a": return "Lá";
        case "b": return "Si";
        case "c": return "Do";
        case "d": return "Ré";
        case "e": return "Mi";
        case "f": return "Fa";
        case "g": return "Sol";
        default: return "Letra inválida! Esolha de A a G para receber a nota equivalente."     
    }
}

//Armazenando a resposta da função "f_return_note"
let resposta = f_return_note(letra);

//Mostrando dado na tela
console.log(`A nota equivalente a letra "${letra}" e: ${resposta}`);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%204.2.js)

<br>

3 - Crie um programa que calcule verifique se o aluno foi aprovado (média acima de 7), esta em recuperação (média abaixo de 7 até 4) ou se esta reprovado (média abaixo de 4). Esse programa deve receber 3 notas e desconsiderar a nota mais baixa para realizar o calculo da média.

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%204.3.js)

<br>

<br>

[Voltar para o inicio](/README.md)