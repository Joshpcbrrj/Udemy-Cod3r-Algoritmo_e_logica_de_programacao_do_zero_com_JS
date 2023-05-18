//Criando as variáveis
let verd1, verd2,verd3;
let fals1, fals2, fals3;

//Criando as operações verdadeiras
verd1 = ((2 + 5 == 7) && (8 > 4) );
verd2 = ((6<= 12) || (4 == "4" ) );
verd3 = (!(4 == 40));

//Mostrando as operações verdadeiras em tela
console.log(verd1);
console.log(verd2);
console.log(verd3);

//Criando as operações falsas
fals1 = ((8 <= 2) || (!(5 === 5)));
fals2 = ((8 <= 16) != ((8 + 5 + 1) === (7*2)));
fals3 = ((8 - 2) == 5) && ((12 === 12) && ((8 %2) != 0));

//Mostrando as operações falsas em tela
console.log(fals1);
console.log(fals2);
console.log(fals3);