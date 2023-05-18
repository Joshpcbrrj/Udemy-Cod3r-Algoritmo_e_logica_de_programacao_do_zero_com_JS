//Variável para armazenar o array
let array_num = [6,7,15,-35,50,-1,-100,0,8]

//Função para pegar o maior número do array
function f_peg_mior_num(array){
    let menor_num = array[0]

    for (let i in array){
        if (array[i] < menor_num){
            menor_num = array[i] 
        }
    }

    console.log(menor_num)
}

//Chamando a função para mostrar maior número do array
f_peg_mior_num(array_num);