# Lista final - Exercícios diversos e por nível

<details>
<summary>PDF das questões</summary>

[LIsta final](/Arquivos/Pdf/Lista%20final%20de%20exerc%C3%ADcios.pdf)

</details>

<details>
<summary>PDF do gabarito</summary>

[LIsta final](/Arquivos/Pdf/Gabarito%20lista%20final%20de%20exerc%C3%ADcios.pdf)

</details>

### 1 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

Exemplos:

```
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
```

<details>
<summary>Código</summary>

```jsx
//Criando variável para o "argumento"
let arg = "Josué";

//Criando a função para "saudacao"
function f_saudacao(argumento){
    console.log(`Olá, ${argumento}!`)
}

//Chamando a função para fazer a saudação
f_saudacao(arg);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2001.js)

<br>

### 2 - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

Exemplos:

```
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.

Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
```

<details>
<summary>Código</summary>

```jsx
//Criando variável para armazenar "idade"
let idade = 33;

//Função para converter anos de vida em dias
function convert_idade_em_dias(idade){
    let convercao = idade * 365;
    console.log(`${idade} anos é o mesmo que ${convercao} dias`);
}

//Chamando a função para converter idade para dias 
convert_idade_em_dias(idade);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2002.js)

<br>

### 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

Exemplo:

```
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
```

<details>
<summary>Código</summary>

```jsx
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
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2003.js)

<br>

### 4 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string). Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

Exemplos:

```
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
```

<details>
<summary>Código</summary>

```jsx
//Criando variável parar armazenar numero do mês
let num_mes = 09;

//Função para referenciar número com nome do mês
function f_convert_num_para_mes(n_mes){
    let mes;
    switch(n_mes){
        case 1:
            mes = "Janeiro"
            break
        case 2:
            mes = "Fevereiro"
            break
        case 3:
            mes = "Março"
            break
        case 4:
            mes = "Abril"
            break
        case 5:
            mes = "Maio"
            break
        case 6:
            mes = "Junho"
            break
        case 7:
            mes = "Julho"
            break
        case 8:
            mes = "Agosto"
            break
        case 9:
            mes = "Setembro"
            break
        case 10:
            mes = "Outrubro"
            break
        case 11:
            mes = "Novembro"
            break
        case 12:
            mes = "Dezembro"
            break
        default:
            mes = "Opção inválida! Escolha de 1 a 12 somente."
    }
    if(n_mes >= 1 && n_mes <= 12 ){
        console.log(`O nº${n_mes} equivale ao mês ${mes}.`);
    }else{
        console.log(mes);
    }
}

//Chamando a função 
f_convert_num_para_mes(num_mes);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2004.js)

<br>

### 5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

Exemplos:

```
maiorOuIgual(0, 0) // Os números são iguais
maiorOuIgual(3, 1) // A é maior que B
maiorOuIgual(2, 8) // B é maior que A
```

<details>
<summary>Código</summary>

```jsx
//Criando variáveis para armzenar os 2 valores
let num_a = 20;
let num_b = 20;

//Criando função para dizer qual é o maior número dentre A e B
function f_diga_maior_num(na, nb){
    let maior_num;

    if(na > nb){
        maior_num = `O número ${na} é maior que número ${nb}.`
    }else if (na < nb){
        maior_num = `O número ${nb} é maior que número ${na}.`
    }else{
        maior_num = "Os números são iguais."
    }

    console.log(maior_num);
}

//Chamando a função para determinar maior número
f_diga_maior_num(num_a, num_b)
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2005.js)

<br>

### 6 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Exemplos:

```
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o valor 
let valor_var = "10";

//Função para trabalhar valor 
function f_inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean"){
        console.log(!valor)
    } 
    else if (tipo == "number"){
        console.log(-valor)
    }else{
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`);
    }
}
    

//Chamando a função para tratar a variável "valor_var"
f_inverso(valor_var);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2006.js)

<br>

### 7 - Crie uma função que receba três números como parâmetro (numero, mínimo, máximo) e também um parâmetro booleano (inclusivo) e retorne se o parâmetro numero (o primeiro parâmetro) está entre mínimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a mínimo ou a máximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a mínimo ou a máximo.

Exemplos:

```
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true
```

<details>
<summary>Código</summary>

```jsx
//Variáveis para armazenar os 4 argumentos
let min = 3;
let max = 100;
let num = 4;
let incl = false;

//Função para trabalhar os 4 elementos 
function f_esta_entre(minimo, maximo, numero, inclusivo = false) {
    console.log(inclusivo ? numero >= minimo && 
    numero <= maximo : numero > minimo && numero < maximo)
}

//Chamando a função e os 4 argumentos 
f_esta_entre(min, max, num, incl);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2007.js)

<br>

### 8 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

Exemplos:

```
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar os 2 números
let num_a = 0;
let num_b = 0;

//Função para multiplicar os números sem usar o sinal "*" de multiplicar
function f_multiplica_a_por_b(na, nb){
    let result = 0;

    if(na >= 0 && nb >=0){
        for(let i = 0; i < nb; i++){
            result += na;
        }
        
        console.log(`A multiplicação de ${na} por ${nb} é ${result}`);
    }else{
        console.log(`Erro! Um dos números ou os 2 números são menores que zero.`);
    }   
}

//Chamando a função para multiplicar númeroA por numeroB
f_multiplica_a_por_b(num_a, num_b);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2008.js)

<br>

### 9 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplos:

```
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
```

<details>
<summary>Código</summary>

```jsx
//Variáveis de item e quantidade
let item = 3;
let quantidade = 4;

//Função para repetir o item pela quantidade determinada (retornando num array)
function f_repetir_item_quantid(item, quantidade) {
    let resultado = [];

    for (let i = 0; i < quantidade; i++){
        resultado.push(item)
    }
    
    console.log(resultado);
}

//Chamando a função para mostrar o array "resultado"
f_repetir_item_quantid(item, quantidade);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2009.js)

<br>

### 10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

Exemplos:

```
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar quantidade de vezes
let quant_vezes = 5;

//Função para imprimir o "+" pela quantidade de vezes
function f_impr_sinais(quantidade) {
    let array_d_mais = new Array(quantidade).fill('+').join('');
    console.log(array_d_mais)
}

//Chamando a função para mostrar os sinais de "+"
f_impr_sinais(quant_vezes);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2010.js)

<br>

### 11 - Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

Exemplos:

```
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
```

<details>
<summary>Código</summary>

```jsx
//Constante para armazenar o array
const array = [10,9,8,8,8,8,8,4,5,5,1]

//Função para pegar o primeiro e último elemento do array
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    let array_final = [primeiroElemento, ultimoElemento]

    console.log (array_final);
}

//mostrando array do primeiro e último elemento na tela
receberPrimeiroEUltimoElemento(array);

//Mostrando o array antigo com as 2 posições removidas
console.log(array);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2011.js)

<br>

### 12 - Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.

Num projeto que você está trabalhando, você foi designado a re fatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.

Exemplos:

```
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
```

<details>
<summary>Código</summary>

```jsx
//Criando a classe pessoa
let Pessoa = (nome, idade, cpf) => ({
    nome: nome,
    idade: idade,
    cpf: cpf
});

//Criando objetos a partir da classe "pessoa"
let pessoa1 = Pessoa("Jose", 30, "123.456.789-00");

//Função para copiar o objeto e remover a propriedade
function f_remove_prop(objeto, propriedade){
    const copia = Object.assign({}, objeto)
    delete copia[propriedade]

    console.log(copia);
}

// Exibindo o objeto "pessoa1" antes da chamada da função
console.log(pessoa1);

// Chamando a função "f_remove_prop" para remover a propriedade "cpf" da cópia do objeto "pessoa1"
f_remove_prop(pessoa1, "cpf");
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2012.js)

<br>

### 13 - Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

Exemplos:

```
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o array
let array_num = [10, "oi", 7, "vida"];

//Função para pegar apenas números do array
function f_pega_numeros(array){
    const num = [];

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] == 'number'){
            num.push(array[i])
        }
    }

    console.log(num);
}

//Chamando a função para mostrar array só com números
f_pega_numeros(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2013.js)

<br>

### 14 - Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:

Exemplos:

```
objetoParaArray({
nome: "Maria",
 profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
 preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
```

<details>
<summary>Código</summary>

```jsx
//Criando a classe produto
let Produto = (nome, descricao, preco) => ({
    nome: nome,
    descricao: descricao,
    preco: preco
});

//Criando objetos a partir da classe "produto"
let produto1 = Produto("mouse simples", "Periférico de computador", 20);
let produto2 = Produto("Teclado simples", "Periférico de computador", 40);
let produto3 = Produto("Monitor LG 25", "Periférico de computador", 1400);

//Incluindo objetos num array
let produtos_loja = Array(produto1, produto2, produto3)

//Função para retornar objeto em um array
function f_trans_obj_array(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]])
    
    console.log(resultado);
}

//Chamando a função para trabalhar sobre os objetos
produtos_loja.forEach(produtos => {
    f_trans_obj_array(produtos)
});
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2014.js)

<br>

### 15 - Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

Exemplos:

```
Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o array
let array_num = [2,3,2,5,4,6,8,10,11,12,9,4,6,6];

//Função para montar array com números pares e indice par
function f_pega_num_par_indice_par(array){
    const array_par = [];

    for(let i = 0; i < array.length; i+= 2){
        if((array[i] % 2) == 0){
            array_par.push(array[i]);
        }
    }

    console.log(array_par);
}

//Chamando a função para mostrar o array novo
f_pega_num_par_indice_par(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2015.js)

<br>

### 16 - A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais

Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400. Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

Exemplos:

```
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
```

<details>
<summary>Código</summary>

```jsx
//Armazenando a variável do ano
let ano = 2100;

//Criando a função que determina se o ano é bissexto
function f_acha_bissexto(ano_para_analizar){
    let situacao="";
    if(ano_para_analizar % 4 == 0){
        if(ano_para_analizar % 100 != 0){
            situacao = `O ano de ${ano_para_analizar} é bissexto.`
        }else{
            situacao = `O ano de ${ano_para_analizar} é um ano normal.`
        }
    }else{
        if(ano_para_analizar % 400 == 0){
            situacao = `O ano de ${ano_para_analizar} é bissexto.`
        }else{
            situacao = `O ano de ${ano_para_analizar} é um ano normal.`
        }
    }

    console.log(situacao)
}

//Chamando a função para determinar se o ano é bissexto ou não
f_acha_bissexto(ano);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2016.js)

<br>

### 17 - Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

Exemplos:

```
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o array
let array_num = [2,4,6,8,10];

//Função para somar todos os valores do array
function f_soma_pos_array(array){
    let soma = 0;
    array.forEach(function(elemento) {
      soma += elemento;
    });

    console.log(`A soma dos elementos do array é ${soma}.`);
}

//Chamando a função para somar os elementos
f_soma_pos_array(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2017.js)

<br>

### 18 - Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.

Crie uma função que receba um array de produtos e retorne o total das despesas

Exemplos:

```
despesasTotais([
 {nome: "Jornal online", categoria: "Informação", preco: 89.99},
 {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
 {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
 {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
```

<details>
<summary>Código</summary>

```jsx
//Criando objeto
const Compra = (nome, categoria, valor) => ({
    nome,
    categoria,
    valor,
  
    m_mostra_produtos(){
        console.log(`Compra: ${this.nome}, categoria: ${this.categoria}, valor R$${this.valor}.`)        
    },
});

//Criando objetos a partir de "compra"
let celular = Compra("Galaxy S20", "Eletônicos", 2000);
let teclado = Compra("Morg", "Instrumentos musicais", 3000);
let role = Compra("Cinema", "Aleatório", 100);

//Armazenando as compras feitas em um array
let compras_feitas = [];
compras_feitas.push(celular, teclado, role);

//Função para somar o valor do gasto 
function f_soma_gastos(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i].valor;
    }

    console.log(`O total gasto foi R${total}`)
}

//Mostrando as caracteristicas dos produtos 
compras_feitas.forEach(compra => {
    compra.m_mostra_produtos();
});

//Usando a função "f_soma_gastos" para mostrar o valor das compras feitas
f_soma_gastos(compras_feitas);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2018.js)

<br>

### 19 - Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário

Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. A média simples é o resultado da soma de todos os números dividido pela quantidade de números.

Exemplos: 

```
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
```

<details>
<summary>Código</summary>

```jsx
//Variável para armzenar o array
let array_num = [5,6];

//Função para calcular a média do array
function calc_media_array(array){
    let total = 0;

    array.forEach(element => {
        total += element;
    });

    total = total / array.length;

    console.log(`A média do array é ${total}`)
}

//Chamando a função para calcular a média do array
calc_media_array(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2019.js)

<br>

### 20 - Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2

Exemplos: 

```
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59
```

<details>
<summary>Código</summary>

```jsx
//Variáveis para armazenar a base e altura do triângulo
let base = 10.54;
let altura = 3.46;

//Função para calcular a área do triângulo
function f_cal_area_tri(base, altura) {
    let area = (base * altura) / 2
    area = area.toFixed(2) // irá arredondar para manter 2 casas decimais

    console.log(`A área do triângulo é: ${area}`);
}

//Chamando a função passando as variáveis como parâmetros
f_cal_area_tri(base, altura);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2020.js)

<br>

### 21 - Criar uma função que receba um array de números e retorne o menor número desse array.

Exemplos: 

```
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o array
let array_num = [6,7,15,-35,50,-1,-100,0,8]

//Função para pegar o maior número do array
function f_peg_mior_num(array){
    let menor_num = array[0]

    for (let i in array){
        if (array[i] < menor_num){
            menor_num = array[i] 
        }
    }

    console.log(menor_num)
}

//Chamando a função para mostrar maior número do array
f_peg_mior_num(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2021.js)

<br>

### 22 - Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado

Exemplos: 

```
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar o número da sorte
let num_sorte = 1;

//Função para armazenar número de 1 a 10
function f_sorteia_1_a_10(num){
    let num_sorteado = 0;
    let min = 1;
    let max = 10;

    if(num < 1 || num >10){
        console.log("Erro! Você só pode escolher entre 1 e 10.")
    }else{
        num_sorteado = Math.floor(Math.random() * (max - min + 1) + min);
        
        if(num_sorteado == num){
            console.log(`Parabéns! o número: ${num_sorteado} foi sorteado`)
        }else{
            console.log(`O número sorteado foi ${num_sorteado} e você escolheu o ${num}. Mais sorte na próxima vez`)
        }
    }
}

//Chamando a função para fazer o sorteio e dizer se ganhamos ou não
f_sorteia_1_a_10(num_sorte);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2022.js)

<br>

### 23 - Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. Considere que todas as palavras só são separadas por um espaço.

Exemplos: 

```
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar a string
let texto = "Duas palavras";

//Função para calcular a quantidade de palavras de uma string
function calc_palavra_in_string(string){
    const palavras = string.split(" ")

    console.log("A quantidade de palavras é: "+ palavras.length)
}

//Chamando a função para contar caracteres
calc_palavra_in_string(texto);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2023.js)

<br>

### 24 - Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

Exemplos: 

```
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
```

<details>
<summary>Código</summary>

```jsx
//Variáveis para armazenar a string e a letra 
let frase = "E a tempos são os jovens que adoecem.";
let letra = "t";

//Função para calcular quantas vezes a letra se repete na string
function calc_letra_in_string(character, string){
    let contador = 0;

    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === character){
            contador++
        }
    }

    if(contador == 1){
        console.log(`A letra "${character}" se repete por ${contador} vez na frase.`);
    }else{
        console.log(`A letra "${character}" se repete por ${contador} vezes na frase.`);
    }  
}

//Chamando a função para calcular os caracteres na frase
calc_letra_in_string(letra, frase);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2024.js)

<br>

### 25 - A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.

Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

Exemplos: 

```
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar palavra
let palavra = "pro";

//Váriavel para armazenar array de palavras
let array_palavras = ["projeto", "programação", "pais", "possível", "código"]

//Função para buscar palavra no array
function f_busc_palavra_array(word, array_of_words){
    let array_result = [];

    for(let w of array_of_words){
        if(w.includes(word)){
            array_result.push(w);
        }
    }

    console.log(`As palavras localizadas com inicio informado são: ${array_result}`);
}

//Chamando a função para pegar as palavras do array de palavras
f_busc_palavra_array(palavra, array_palavras);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2025.js)

<br>

### 26 - Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

Exemplos: 

```
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar a string
let frase = "Rio de Janeiro"; 

//Função para remover as vogais da string
function f_remove_vogais(string){
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => string = string.replace(vogal, ''))

    console.log(string);
}

//Chamando a função para remover as vogais
f_remove_vogais(frase);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2026.js)

<br>

### 27 - Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:

Exemplos: 

```
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar classe "Pessoa"
const Pessoa = {
    criar: function(nome, idade, cpf) {
      return {
        nome: nome,
        idade: idade,
        cpf: cpf
      };
    }
  }

//Criando objetos a partir da classe "Pessoa"
let pessoa1 = Pessoa.criar("João", 30, "123.456.789-00");
let pessoa2 = Pessoa.criar("Maria", 25, "987.654.321-00");

//Função que inverte chave com valor
function f_invert_chave_valor(objeto){
    let objeto_invertido = {}

    Object.entries(objeto).forEach(par_chave_valor => {
        let chave = 0, valor = 1

        objeto_invertido [par_chave_valor[valor]] = par_chave_valor[chave]
    })

    console.log(objeto_invertido);
}

//Chamando a função para inverter a chave e valor dos objetos
f_invert_chave_valor(pessoa1);
f_invert_chave_valor(pessoa2);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2027.js)

<br>

### 28 - Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

Exemplos: 

```
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar array
let array_num = [4,13,2,25,401,6,302,42,54,8,1,0,36,11,124,69];

//Variável para armazenar quantidade de dígitos
let quant_dig = 1;

//Função para selecionar do array os números com determinada quantidade de dígitos
function f_mostra_qunt_dig_no_array(array_de_num, quant_dig){
    let array_sel = [];

    for(num of array_de_num){
        let quant_digitos = String(num).length

        if(quant_digitos === quant_dig){
            array_sel.push(num)
        }
    }

    if(quant_dig == 1){
        console.log(`Os números do array com "${quant_dig}" digito são: ${array_sel}`);
    }else{
        console.log(`Os números do array com "${quant_dig}" digitos são: ${array_sel}`);
    }
} 

//Chamando a função para veririficar os números com a quantidade de caracteres que determinamos
f_mostra_qunt_dig_no_array(array_num, quant_dig);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2028.js)

<br>

### 29 - Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

Exemplos: 

```
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
```

<details>
<summary>Código</summary>

```jsx
//Variável para armazenar array de números
let array_num = [2,4,10,1];

//Função para retornar o segundo maior número do array
function f_mostra_seg_maior_num(array_de_numeros){
    let indice_maior_num = 0
    let segundo_maior_num;

    array_de_numeros.forEach((numero, indice) => {
        if(numero > array_de_numeros[indice_maior_num]){
            indice_maior_num = indice;
        }
    })

    array_de_numeros.splice(indice_maior_num, 1)
    segundo_maior_num = array_de_numeros[0];

    array_de_numeros.forEach(numero =>{
        if(numero > segundo_maior_num){
            segundo_maior_num = numero;
        }
    })

    console.log(`O segundo maior número do array é ${segundo_maior_num}`);
}

//Chamando a função para determinar o segundo maior número do array
f_mostra_seg_maior_num(array_num);
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2029.js)

<br>

### 30 - Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas

Exemplos: 

```
recerberMelhorEstudante({
 Joao: [8, 7.6, 8.9, 6], // média 7.625
 Mariana: [9, 6.6, 7.9, 8], // média 7.875
 Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
```

<details>
<summary>Código</summary>

```jsx
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)

const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
    const chave = 0,
    valor = 1

    return { 
        nome: estudante[chave], media: media(estudante[valor]) 
    }
    })

    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )

    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante

}
```

</details>

[Arquivo do código em JS](/Arquivos/C%C3%B3digos/Lista%20f%2030.js)

<br>

<br>

[Voltar para o inicio](/README.md)