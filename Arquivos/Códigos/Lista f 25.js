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