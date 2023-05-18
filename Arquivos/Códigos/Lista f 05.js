//Criando variáveis para armzenar os 2 valores
let num_a = 20;
let num_b = 20;

//Criando função para dizer qual é o maior número dentre A e B
function f_diga_maior_num(na, nb){
    let maior_num;

    if(na > nb){
        maior_num = `O número ${na} é maior que número ${nb}.`
    }else if (na < nb){
        maior_num = `O número ${nb} é maior que número ${na}.`
    }else{
        maior_num = "Os números são iguais."
    }

    console.log(maior_num);
}

//Chamando a função para determinar maior número
f_diga_maior_num(num_a, num_b)