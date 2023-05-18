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