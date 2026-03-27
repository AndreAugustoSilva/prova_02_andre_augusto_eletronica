function calculoConsumo() {
    
    let mostrar = true;
    let eletrodomestico = prompt("Digite o nome do eletrodoméstico:");
    let horas = parseInt(prompt("Digite quantas horas o eletrodoméstico funciona em média:"));
    let calculo = parseInt(prompt("Deseja trabalhar com 'kW' ou 'W'?\n- 1 para 'kW';\n- 2 para 'W';\n- 3 caso tiver apenas a tensão e a corrente."));
    let potencia, consumo, tensao, corrente;

    if(calculo == 1) {
        potencia = parseFloat(prompt("Digite a potencia em 'kW':"));
        consumo = potencia * horas * 30;
    } else if(calculo == 2) {
        potencia = parseFloat(prompt("Digite a potência em 'W':"));
        consumo = (potencia * horas * 30 ) / 1000;
    } else if(calculo == 3) {
        tensao = parseFloat(prompt("Digite a tensão em volts:"))
        corrente = parseFloat(prompt("Digite a corrente em amperes:"))
        potencia = tensao * corrente
        consumo = (potencia * horas * 30 ) / 1000;
    } else {
        mostrar = false;
        console.log("Erro: ID Inválido.");
    }

    if(mostrar = true) {
        let preco = parseFloat(prompt("Digite o preço por kWh da sua região:"));
        console.log("Eletrodoméstico: ", eletrodomestico, ".\nConsumo mensal: ", consumo.toFixed(2), "kW.\nPreço a pagar: ", (consumo*preco).toFixed(2), "R$.");
    }
}