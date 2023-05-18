//Criando uma constante "data"
const data = {
    dia: 7,
    mes: 11,
    ano: 2022,

    //criando método "exibir_data"
    exibir_data(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

//Chamando método "exibir_data" para mostrar informações em tela
console.log(data.exibir_data());