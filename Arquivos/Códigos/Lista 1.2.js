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