//Variável para armazenar array de números
let array_num = [2,4,10,1];

//Função para retornar o segundo maior número do array
function f_mostra_seg_maior_num(array_de_numeros){
    let indice_maior_num = 0
    let segundo_maior_num;

    array_de_numeros.forEach((numero, indice) => {
        if(numero > array_de_numeros[indice_maior_num]){
            indice_maior_num = indice;
        }
    })

    array_de_numeros.splice(indice_maior_num, 1)
    segundo_maior_num = array_de_numeros[0];

    array_de_numeros.forEach(numero =>{
        if(numero > segundo_maior_num){
            segundo_maior_num = numero;
        }
    })

    console.log(`O segundo maior número do array é ${segundo_maior_num}`);
}

//Chamando a função para determinar o segundo maior número do array
f_mostra_seg_maior_num(array_num);