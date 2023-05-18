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