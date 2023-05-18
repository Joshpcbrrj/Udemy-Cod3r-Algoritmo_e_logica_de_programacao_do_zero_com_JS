//Variáveis para armazenar os 4 argumentos
let min = 3;
let max = 100;
let num = 4;
let incl = false;

//Função para trabalhar os 4 elementos 
function f_esta_entre(minimo, maximo, numero, inclusivo = false) {
    console.log(inclusivo ? numero >= minimo && 
    numero <= maximo : numero > minimo && numero < maximo)
}

//Chamando a função e os 4 argumentos 
f_esta_entre(min, max, num, incl);