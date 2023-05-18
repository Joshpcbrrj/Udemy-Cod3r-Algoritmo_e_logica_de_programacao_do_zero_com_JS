//Armazenando a variável do ano
let ano = 2100;

//Criando a função que determina se o ano é bissexto
function f_acha_bissexto(ano_para_analizar){
    let situacao="";
    if(ano_para_analizar % 4 == 0){
        if(ano_para_analizar % 100 != 0){
            situacao = `O ano de ${ano_para_analizar} é bissexto.`
        }else{
            situacao = `O ano de ${ano_para_analizar} é um ano normal.`
        }
    }else{
        if(ano_para_analizar % 400 == 0){
            situacao = `O ano de ${ano_para_analizar} é bissexto.`
        }else{
            situacao = `O ano de ${ano_para_analizar} é um ano normal.`
        }
    }

    console.log(situacao)
}

//Chamando a função para determinar se o ano é bissexto ou não
f_acha_bissexto(ano);