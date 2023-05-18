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