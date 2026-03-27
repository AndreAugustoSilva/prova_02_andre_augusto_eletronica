function calculoConsumo() {
    
    let eletrodomestico = prompt("Digite o nome do eletrodoméstico:");
    let horas = parseInt(prompt("Digite quantas horas o eletrodoméstico funciona em média:"));
    let calculo = parseInt(prompt("Deseja trabalhar com 'kW' ou 'W'?\n- 1 para 'kW';\n- 2 para 'W'."));
    let potencia, consumo;

    if(calculo == 1) {
        potencia = parseFloat(prompt("Digite a potencia em 'kW':"));
        consumo = potencia * horas * 30;
    } else if(calculo == 2) {
        potencia = parseFloat(prompt("Digite a potência em 'W':"));
        consumo = (potencia * horas * 30 ) / 1000;
    } else {
        console.log("Erro: ID Inválido.")
    }

    let preco = parseFloat(prompt("Digite o preço por kWh da sua região:"))
    console.log("Eletrodoméstico: ", eletrodomestico, ".\nConsumo mensal: ", consumo.toFixed(2), "kW.\nPreço a pagar: ", (consumo*preco).toFixed(2), "R$.")
    
}