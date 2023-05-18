//Criando variável para armazenar a nota
let nota = 7;

//Criando função para agir de acordo com a nota informada
function avalia_nota(nota){
    if(nota > 10){ //Limitando a nota a 10
        console.log("Valor não permitido ! A maior nota só pode ser 10");
    }
    else if (nota >= 9){
        console.log("Conceito A");
    }else if (nota >= 7){
        console.log("Conceito B");
    }else if(nota >= 5){
        console.log("Conceito C");
    }else if(nota >= 4.5){
        console.log("Conceito D");
    }else if (nota >= 0){
        console.log("Conceito E");
    }else{ //Tratando notas abaixo de zero
        console.log("Valor não permitido ! A menor nota só pode ser 0");
    }
}

//Chamando a função para mostrar resultado em tela
avalia_nota(nota);