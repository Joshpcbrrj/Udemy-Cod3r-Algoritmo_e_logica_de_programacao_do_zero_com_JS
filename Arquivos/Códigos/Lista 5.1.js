//Array com 10 posições
const a_num = [1,2,3,4,5,6,7,8,9,10]

//Imprimindo da penúltima a primeira posição
for(let i = a_num.length -2; i >= 0; i -= 2){
    console.log("Posição",i+"°", a_num[i]);
}