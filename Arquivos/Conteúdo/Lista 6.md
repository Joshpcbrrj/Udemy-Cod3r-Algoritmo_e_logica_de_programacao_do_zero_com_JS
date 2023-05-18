# Lista 6 - Objeto

1 - Crie uma classe data com atributos de dia, mês e ano e um método que exiba os atributos assim: Dia/mês/ano.

<details>
<summary>Código</summary>

```jsx
//Criando uma constante "data"
const data = {
    dia: 07,
    mes: 11,
    ano: 2022,

    //criando método "exibir_data"
    exibir_data(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

//Chamando método "exibir_data" para mostrar informações em tela
console.log(data.exibir_data());
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%206.1.js)

<br>

<br>

[Voltar para o inicio](/README.md)