# Lista 1 - dados

### 1 - Calcule a área de uma circunferência de raio tamanho 10.

<details>
<summary>Código</summary>

```jsx
//Criando função para calculo da área ( PI * raio * raio)
function calculaArea(raio){
    const Pi = Math.PI; // exibe 3.141592653589793
    let area = Pi * raio * raio;
    console.log("A area do circulo é: " + area + "m2");
}

//Determinando o valor do raio da circunferência
let r = 10;

//Chamando a função "calculaArea" e passando "r" como parâmetro 
calculaArea(r);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%201.1.js)

<br>

### 2 - Crie um programa que tenha variável A valendo 7, e B valendo 94. Ao concluir as instruções os valor de A deve ser trocado por B e vice versa. Ao final, A irá valer 94 e B valerá 7.

<details>
<summary>Código</summary>

```jsx
//Variáveis com valor default
let a = 7;
let b = 94;

//Imprimindo valores default de a e b
console.log("Valor default de A é: " + a);
console.log("Valor default de B é: " + b);

//Criando variável para executar a troca de valores de a e b e fazendo a troca
let troca;
troca = a;
a = b;
b = troca;

//Imprimindo valores trocados de a e b
console.log("Valor de A trocado: " + a);
console.log("Valor de B trocado: " + b);

//Outra forma de trocar valores sem usar variável "troca" (Nesse caso irá destrocar os valores)
[a, b] = [b, a]

//Mostrando valores destrocados
console.log("Voltando ao default de A " + a);
console.log("Voltando ao default de B " + b);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%201.2.js)

<br>

<br>

[Voltar para o inicio](/README.md)