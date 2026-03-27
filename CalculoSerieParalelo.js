function calculoSerieParalelo() {
    
    let mostrar = true;
    let resistencia = [];
    let resistenciaTotal = 0;
    let tamanho = parseInt(prompt("Digite a quantidade de resistores que você deseja calcular:"));

    for(let cont = 0; cont < tamanho; cont++) {
        resistencia[cont] = parseFloat(prompt("Digite a resistência do " + (cont+1) + "º resistor:"));
    }

    let id = parseInt(prompt("Digite o cálculo que deseja fazer:\n- 1 para resistores em série;\n- 2 para resistores em paralelo."));

    switch(id) {
        case 1:
            for(let cont = 0; cont < tamanho; cont++) {
                resistenciaTotal += resistencia[cont];
            }
            break;
        case 2:
            for(let cont = 0; cont < tamanho; cont++) {
                resistenciaTotal += 1 / resistencia[cont];
            }
            resistenciaTotal = 1 / resistenciaTotal;
            break;
        default:
            console.log("Erro: ID Inválido.");
            mostrar = false;
            break;
    }

    let prefixo;

    if(resistenciaTotal < 1000) {
        prefixo = '';
    } else if(resistenciaTotal < 10**6) {
        resistenciaTotal /= 1000;
        prefixo = 'K';
    } else if(resistenciaTotal < 10**9) {
        resistenciaTotal /= 10**6;
        prefixo = 'M';
    } else if(resistenciaTotal < 10**12) {
        resistenciaTotal /= 10**9;
        prefixo = 'B';
    } else {
        console.log("Valor muito alto.");
        mostrar = false;
    }

    if(mostrar == true) {
        console.log("Resistência total: ", resistenciaTotal.toFixed(2), prefixo, "Ω.");
    }
}