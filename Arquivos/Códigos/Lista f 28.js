//Variável para armazenar array
let array_num = [4,13,2,25,401,6,302,42,54,8,1,0,36,11,124,69];

//Variável para armazenar quantidade de dígitos
let quant_dig = 1;

//Função para selecionar do array os números com determinada quantidade de dígitos
function f_mostra_qunt_dig_no_array(array_de_num, quant_dig){
    let array_sel = [];

    for(num of array_de_num){
        let quant_digitos = String(num).length

        if(quant_digitos === quant_dig){
            array_sel.push(num)
        }
    }

    if(quant_dig == 1){
        console.log(`Os números do array com "${quant_dig}" digito são: ${array_sel}`);
    }else{
        console.log(`Os números do array com "${quant_dig}" digitos são: ${array_sel}`);
    }
} 

//Chamando a função para veririficar os números com a quantidade de caracteres que determinamos
f_mostra_qunt_dig_no_array(array_num, quant_dig);