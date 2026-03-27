function conversaoMultSub() {
    
    let unidade = prompt("Digite a unidade em que será convertida (V, A, W, Ω):");
    let prefixo1;
    let prefixo2;
    let prefixoLetra;
    let valor = parseFloat(prompt("Digite o valor que será convertido:"))

    let id1 = parseInt(prompt("Digite o prefixo que deseja converter:\n- 1 para giga;\n- 2 para mega;\n- 3 para quilo;\n- 4 para base;\n- 5 para mili;\n- 6 para micro;\n- 7 para nano;\n- 8 para pico."));

    switch(id1) {
        case 1:
            prefixo1 = 10**9
            break;
        case 2:
            prefixo1 = 10**6
            break;
        case 3:
            prefixo1 = 1000
            break;
        case 4:
            prefixo1 = 1
            break;
        case 5:
            prefixo1 = 0.001
            break;
        case 6:
            prefixo1 = 10**-6
            break;
        case 7:
            prefixo1 = 10**-9
            break;
        case 8:
            prefixo1 = 10**-12
            break;
        default:
            console.log("Erro: o ID do primeiro prefixo é inválido.")
            break;
    }

    let id2 = parseInt(prompt("Digite o prefixo no qual o primeiro será convertido:\n- 1 para giga;\n- 2 para mega;\n- 3 para Q=quilo;\n- 4 para base;\n- 5 para mili;\n- 6 para micro;\n- 7 para nano;\n- 8 para pico."));

    switch(id2) {
        case 1:
            prefixo2 = 10**-9
            prefixoLetra = 'G'
            break;
        case 2:
            prefixo2 = 10**-6
            prefixoLetra = 'M'
            break;
        case 3:
            prefixo2 = 0.001
            prefixoLetra = 'k'
            break;
        case 4:
            prefixo2 = 1
            prefixoLetra = ''
            break;
        case 5:
            prefixo2 = 1000
            prefixoLetra = 'm'
            break;
        case 6:
            prefixo2 = 10**6
            prefixoLetra = 'µ'
            break;
        case 7:
            prefixo2 = 10**9
            prefixoLetra = 'n'
            break;
        case 8:
            prefixo2 = 10**12
            prefixoLetra = 'p'
            break;
        default:
            console.log("Erro: o ID do segundo prefixo é inválido.")
            break;
    }

    prefixo1 *= valor
    prefixo1 *= prefixo2

    console.log("Resultado: ", prefixo1, prefixoLetra, unidade)
}