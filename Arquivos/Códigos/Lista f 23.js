//Variável para armazenar a string
let texto = "Duas palavras";

//Função para calcular a quantidade de palavras de uma string
function calc_palavra_in_string(string){
    const palavras = string.split(" ")

    console.log("A quantidade de palavras é: "+ palavras.length)
}

//Chamando a função para contar caracteres
calc_palavra_in_string(texto);