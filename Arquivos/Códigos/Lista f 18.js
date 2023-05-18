//Criando objeto
const Compra = (nome, categoria, valor) => ({
    nome,
    categoria,
    valor,
  
    m_mostra_produtos(){
        console.log(`Compra: ${this.nome}, categoria: ${this.categoria}, valor R$${this.valor}.`)        
    },
});

//Criando objetos a partir de "compra"
let celular = Compra("Galaxy S20", "Eletônicos", 2000);
let teclado = Compra("Morg", "Instrumentos musicais", 3000);
let role = Compra("Cinema", "Aleatório", 100);

//Armazenando as compras feitas em um array
let compras_feitas = [];
compras_feitas.push(celular, teclado, role);

//Função para somar o valor do gasto 
function f_soma_gastos(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i].valor;
    }

    console.log(`O total gasto foi R${total}`)
}

//Mostrando as caracteristicas dos produtos 
compras_feitas.forEach(compra => {
    compra.m_mostra_produtos();
});

//Usando a função "f_soma_gastos" para mostrar o valor das compras feitas
f_soma_gastos(compras_feitas);