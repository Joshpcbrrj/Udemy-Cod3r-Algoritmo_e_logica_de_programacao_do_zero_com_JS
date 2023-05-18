// Criando variável com valor de Fahrenheit
let f = 73;

//Criando função para converter para graus Celcius
function convert_f_to_cel (temp_Fahrenheit){
    let temp_celcius = (temp_Fahrenheit - 32) / 1.8;
    console.log("A temperatura " + temp_Fahrenheit + "°F é igual a " + temp_celcius +"°C." );
}

//Convertendo Fahrenheit para Celcius e mostrando valor
convert_f_to_cel(f);