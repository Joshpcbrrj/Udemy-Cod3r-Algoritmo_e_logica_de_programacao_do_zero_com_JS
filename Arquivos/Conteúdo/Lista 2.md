# Lista 2 - Operadores

## Aritméticos

Crie um programa que converta 73 Fahrenheit para Celsius.

<details>
<summary>Código</summary>

```jsx
// Criando variável com valor de Fahrenheit
let f = 73;

//Criando função para converter para graus Celcius
function convert_f_to_cel (temp_Fahrenheit){
    let temp_celcius = (temp_Fahrenheit - 32) / 1.8;
    console.log("A temperatura " + temp_Fahrenheit + "°F é igual a " + temp_celcius +"°C." );
}

//Convertendo Fahrenheit para Celcius e mostrando valor
convert_f_to_cel(f);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%202.1.js)

<br>

## Relacionais

A partir de A = 1 e B = 2, crie 5 expressões verdadeiras e 5 expressões falsas.

<details>
<summary>Código</summary>

```jsx
//Criando variáveis
let a = 1, b = 2;

//Expressões verdadeiras (Com valor true)
console.log(a < b);
console.log(a <= b);
console.log(a != b);
console.log(b == a + a);
console.log(a + b === b + a);

//Expressões falsas (Com valor false)
console.log(a > b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);
console.log(b <= a);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%202.2.js)

<br>

## Atribuição

Crie uma lista de 10 pessoas com número e nome e com uma linha de espaço em cada. No fim, imprima essa lista com um único console.log;

<details>
<summary>Código</summary>

```jsx
//Criando variável texto
let texto;

//Criando a lista dentro da variável texto
texto = "Lista de aprovados";
texto += "\n===================";
texto += "\n01.\tAna Silva";
texto += "\n02.\tPedro Albuquerque";
texto += "\n03.\tGuilherme Pereira";
texto += "\n04.\tRebeca França ";
texto += "\n05.\tWagner Araujo Sodre";
texto += "\n06.\tGiovani Francisco do Carmo";
texto += "\n07.\tBruna Carla Werneck";
texto += "\n08.\tFrancisco Conceição Souza";
texto += "\n09.\tPatrícia Amorim Neves";
texto += "\n10.\tJosué B. Almeida";

//Mostrando lista no console
console.log(texto);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%202.3.js)

<br>

## Lógicos/ relacionais/ aritméticos

Crie 3 expressões que irão resultar em true (Usando operadores aritméticos/ relacionais  lógicos) e 3 expressões que irão retornar false usando a mesma regra.

<details>
<summary>Código</summary>

```jsx
//Criando as variáveis
let verd1, verd2,verd3;
let fals1, fals2, fals3;

//Criando as operações verdadeiras
verd1 = ((2 + 5 == 7) && (8 > 4) );
verd2 = ((6<= 12) || (4 == "4" ) );
verd3 = (!(4 == 40));

//Mostrando as operações verdadeiras em tela
console.log(verd1);
console.log(verd2);
console.log(verd3);

//Criando as operações falsas
fals1 = ((8 <= 2) || (!(5 === 5)));
fals2 = ((8 <= 16) != ((8 + 5 + 1) === (7*2)));
fals3 = ((8 - 2) == 5) && ((12 === 12) && ((8 %2) != 0));

//Mostrando as operações falsas em tela
console.log(fals1);
console.log(fals2);
console.log(fals3);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%202.4.js)

<br>

## Ternário

Usando operador ternário, crie 2 variáveis `(a = 8` e `b =4)` e uma outra chamada `operacao`. A variável `operacao`deve receber um sinal indicando (+ para soma, - para a subtração, * para multiplicar, / para dividir). Teremos que ter uma 4° variável chamada `resultado` que deverá ser adaptada ao tipo de sinal escolhido para a variável `operacao`e dar o resultado adequado para cada situação.

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%202.5.js)

<br>

<br>

[Voltar para o inicio](/README.md)