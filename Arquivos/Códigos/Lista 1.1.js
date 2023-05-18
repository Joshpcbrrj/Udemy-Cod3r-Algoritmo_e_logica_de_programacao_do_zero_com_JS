//Criando função para calculo da área ( PI * raio * raio)
function calculaArea(raio){
    const Pi = Math.PI; // exibe 3.141592653589793
    let area = Pi * raio * raio;
    console.log("A area do circulo é: " + area + "m2");
}

//Determinando o valor do raio da circunferência
let r = 10;

//Chamando a função "calculaArea" e passando "r" como parâmetro 
calculaArea(r);