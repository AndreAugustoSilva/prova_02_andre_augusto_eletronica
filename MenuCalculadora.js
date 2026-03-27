let id = 1

while(id != 0) {

    id = parseInt(prompt("Digite um ID para escolher uma função (respostas no console, se nada aparecer, digite 0 e recarregue a página):\n- 0 para sair;\n- 1 para calcular múltiplos e submúltiplos;\n- 2 para aplicar a fórmula da lei de Ohm;\n- 3 para calcular a resistência de um resistor;\n- 4 para calcular o consumo de um eletrodoméstico;\n- 5 para calcular resistores em série e paralelos."));

    switch(id) {
        case 1:
            conversaoMultSub();
            break;
        case 2:
            calculoLeiOhm();
            break;
        case 3:
            calculoResistor();
            break;
        case 4:
            calculoConsumo();
            break;
        case 5:
            calculoSerieParalelo();
            break;
        default:
            if(id != 0){
                console.log("Por favor, digite um ID válido.")
            }
            break;
    }
}