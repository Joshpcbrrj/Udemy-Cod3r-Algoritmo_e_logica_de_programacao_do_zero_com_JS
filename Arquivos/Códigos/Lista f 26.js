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