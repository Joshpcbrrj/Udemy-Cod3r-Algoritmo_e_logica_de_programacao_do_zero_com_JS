//Variáveis para armazenar a base e altura do triângulo
let base = 10.54;
let altura = 3.46;

//Função para calcular a área do triângulo
function f_cal_area_tri(base, altura) {
    let area = (base * altura) / 2
    area = area.toFixed(2) // irá arredondar para manter 2 casas decimais

    console.log(`A área do triângulo é: ${area}`);
}

//Chamando a função passando as variáveis como parâmetros
f_cal_area_tri(base, altura);