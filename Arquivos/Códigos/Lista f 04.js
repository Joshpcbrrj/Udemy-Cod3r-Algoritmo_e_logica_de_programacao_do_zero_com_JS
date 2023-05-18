//Criando variável parar armazenar numero do mês
let num_mes = 9;

//Função para referenciar número com nome do mês
function f_convert_num_para_mes(n_mes){
    let mes;
    switch(n_mes){
        case 1:
            mes = "Janeiro"
            break
        case 2:
            mes = "Fevereiro"
            break
        case 3:
            mes = "Março"
            break
        case 4:
            mes = "Abril"
            break
        case 5:
            mes = "Maio"
            break
        case 6:
            mes = "Junho"
            break
        case 7:
            mes = "Julho"
            break
        case 8:
            mes = "Agosto"
            break
        case 9:
            mes = "Setembro"
            break
        case 10:
            mes = "Outrubro"
            break
        case 11:
            mes = "Novembro"
            break
        case 12:
            mes = "Dezembro"
            break
        default:
            mes = "Opção inválida! Escolha de 1 a 12 somente."
    }
    if(n_mes >= 1 && n_mes <= 12 ){
        console.log(`O nº${n_mes} equivale ao mês ${mes}.`);
    }else{
        console.log(mes);
    }
}

//Chamando a função 
f_convert_num_para_mes(num_mes);