//Variável para armazenar o valor 
let valor_var = "10";

//Função para trabalhar valor 
function f_inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean"){
        console.log(!valor)
    } 
    else if (tipo == "number"){
        console.log(-valor)
    }else{
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`);
    }
}
    

//Chamando a função para tratar a variável "valor_var"
f_inverso(valor_var);