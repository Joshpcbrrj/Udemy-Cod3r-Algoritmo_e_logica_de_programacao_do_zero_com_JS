//Variável para armazenar o número da sorte
let num_sorte = 1;

//Função para armazenar número de 1 a 10
function f_sorteia_1_a_10(num){
    let num_sorteado = 0;
    let min = 1;
    let max = 10;

    if(num < 1 || num >10){
        console.log("Erro! Você só pode escolher entre 1 e 10.")
    }else{
        num_sorteado = Math.floor(Math.random() * (max - min + 1) + min);
        
        if(num_sorteado == num){
            console.log(`Parabéns! o número: ${num_sorteado} foi sorteado`)
        }else{
            console.log(`O número sorteado foi ${num_sorteado} e você escolheu o ${num}. Mais sorte na próxima vez`)
        }
    }
}

//Chamando a função para fazer o sorteio e dizer se ganhamos ou não
f_sorteia_1_a_10(num_sorte);