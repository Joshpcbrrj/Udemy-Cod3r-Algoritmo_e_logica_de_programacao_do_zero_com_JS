# Lista 5 - Array

1 - Em um array de 10 posições, percorra e mostre de forma regressiva da penultima posição até a primeira de 2 em 2. Ps: Não inclua a última posição.

<details>
<summary>Código</summary>

```jsx
//Array com 10 posições
const a_num = [1,2,3,4,5,6,7,8,9,10]

//Imprimindo da penúltima a primeira posição
for(let i = a_num.length -2; i >= 0; i -= 2){
    console.log("Posição",i+"°", a_num[i]);
}
```

</details>

[Arquivo do código em JS]()

<br>

<br>

[Voltar para o inicio](/README.md)