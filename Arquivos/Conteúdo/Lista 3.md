# Lista 3 - Estruturas de controle

## Condicionais

1 - Qual o problema dessa linha de código: const nota = 2.3; if(nota >= 7);{console.log("Aprovado")} que imprime a linha mesmo quando o aluno tira nota inferior a 7 ?

<details>
<summary>Código</summary>

```jsx
const nota = 2.3;

//O problema é no uso do ";" no final do bloco "if"
if(nota >= 7){
    console.log("Aprovado")
}
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.1.1.js)

<br>

2 - Crie um programa que calcule a partir de uma nota os seguintes conceitos: A notas entre 10 e 9/ B notas entre 8.9 e 7/ C notas entre 6.9 e 5/ D notas entre 4.9 e 4.5/ E nota abaixo de 4.5.

<details>
<summary>Código</summary>

```jsx
//Criando variável para armazenar a nota
let nota = 7;

//Criando função para agir de acordo com a nota informada
function avalia_nota(nota){
    if(nota > 10){ //Limitando a nota a 10
        console.log("Valor não permitido ! A maior nota só pode ser 10");
    }
    else if (nota >= 9){
        console.log("Conceito A");
    }else if (nota >= 7){
        console.log("Conceito B");
    }else if(nota >= 5){
        console.log("Conceito C");
    }else if(nota >= 4.5){
        console.log("Conceito D");
    }else if (nota >= 0){
        console.log("Conceito E");
    }else{ //Tratando notas abaixo de zero
        console.log("Valor não permitido ! A menor nota só pode ser 0");
    }
}

//Chamando a função para mostrar resultado em tela
avalia_nota(nota);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.1.2.js)

<br>

3 - A partir de variáveis a = 28 b = 10, crie um programa que tenha uma variável que permita a escolha da operação usando if e else.

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.1.3.js)

<br>

4 - Crie com o switch case uma forma de dar um conceito para um aluno de acordo com a nota. A correspondência fica: A+ = nota 10, A = nota 9, B+ = nota 8, b = nota 7, C+ = nota 6, C = nota 5, D+ = nota 4, D = nota 3, E+ = nota 2, E = nota 1, F = nota 0.

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.1.4.js)

<br>

<br>

## Repetição

1 - Crie um laço for que imprima de forma decrescente do número 7 ao número 3.

<details>
<summary>Código</summary>

```jsx
//Laço para imprimir de 7 a 3
for(let i = 7; i >= 3; i--){
    console.log(i);
}
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.2.1.js)

<br>


2 - Imprima 2 números dessa forma (Linha 1 - [1, 1], [1, 2], [1, 3] -- Linha 2 - [2, 1], [2, 2], [2, 3] -- Linha 3 - [3, 1], [3, 2], [3, 3] ) usando o laço for.

<details>
<summary>Código</summary>

```jsx
//Laço para imprimir as linhas
for(i = 1; i <= 3; i++){
    let linha = '';
    for(j = 1; j<=3; j++){
        linha += `[${i},${j}]`
    }
    console.log(`linha ${i}° ${linha}`);
}
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.2.2.js)

<br>

3 - Imprima isso no console com laço for sem usar números
```
#
##
###
####
#####
######
```
<details>
<summary>Código</summary>

```jsx
//Laço para imprimir as cerquilhas
for(i = "#"; i <= "######"; i+="#"){
    console.log(i);
}
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%203.2.3.js)

<br>

<br>

[Voltar para o inicio](/README.md)