//Criando variáveis
let letra = "c";

//Função que retorna a nota de acordo com a letra
function f_return_note(letra){
    switch(letra){
        case "a": return "Lá";
        case "b": return "Si";
        case "c": return "Do";
        case "d": return "Ré";
        case "e": return "Mi";
        case "f": return "Fa";
        case "g": return "Sol";
        default: return "Letra inválida! Esolha de A a G para receber a nota equivalente."     
    }
}

//Armazenando a resposta da função "f_return_note"
let resposta = f_return_note(letra);

//Mostrando dado na tela
console.log(`A nota equivalente a letra "${letra}" e: ${resposta}`);