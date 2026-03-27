let id = 1

while(id != 0) {

    id = parseInt(prompt("Digite um ID para escolher uma função (respostas no console, se nada aparecer, digite 0 e recarregue a página):\n- 0 para sair;\n- 1 para calcular múltiplos e submúltiplos;\n- 2 para calcular o consumo de um eletrodoméstico;\n- 3 para calcular resistores em série e paralelos;\n- 4 para aplicar a fórmula da Lei de Ohm;\n- 5 para calcular a resistência de um resistor"));

    switch(id) {
        case 1:
            conversaoMultSub();
            break;
        case 2:
            calculoConsumo();
            break;
        case 3:
            calculoSerieParalelo();
            break;
        case 4:
            calculoLeiOhm();
            break;
        case 5:
            calculoResistor();
            break;
        default:
            if(id != 0){
                console.log("Por favor, digite um ID válido.")
            }
            break;
    }
}