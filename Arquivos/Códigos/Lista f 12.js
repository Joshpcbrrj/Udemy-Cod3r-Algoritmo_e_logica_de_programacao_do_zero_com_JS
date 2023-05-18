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