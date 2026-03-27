function calculoLeiOhm() {
    
    let escolha = parseInt(prompt("Digite o que você deseja descobrir:\n- 1 para tensão;\n- 2 para corrente;\n- 3 para resistência"));
    let tensao, corrente, resistencia, prefixo;

    if(escolha == 2 || escolha == 3) {
        tensao = parseFloat(prompt("Digite a tensão em volts:"));
    }

    if(escolha == 1 || escolha == 3) {
        corrente = parseFloat(prompt("Digite a corrente em amperes:"));
    }

    if(escolha == 1 || escolha == 2) {
        resistencia = parseFloat(prompt("Digite a resistencia em ohms:"));
    }
    
    switch(escolha) {
        case 1:
            tensao = corrente * resistencia;

            if(tensao < 0) {
                tensao *= 1000;
                prefixo = 'm'
            } else if(tensao < 1000) {
                prefixo = '';
            } else if(tensao < 10**6) {
                tensao /= 1000;
                prefixo = 'K';
            } else if(tensao < 10**9) {
                tensao /= 10**6;
                prefixo = 'M';
            } else {
                tensao /= 10**9;
                prefixo = 'B';
            }

            console.log("A tensão é de " , tensao, prefixo, "V.");
            break;
        case 2:
            corrente = tensao / resistencia;

            if(corrente < 0) {
                corrente *= 1000;
                prefixo = 'm'
            } else if(corrente < 1000) {
                prefixo = '';
            } else if(corrente < 10**6) {
                corrente /= 1000;
                prefixo = 'K';
            } else if(corrente < 10**9) {
                corrente /= 10**6;
                prefixo = 'M';
            } else {
                corrente /= 10**9;
                prefixo = 'B';
            }

            console.log("A corrente é de " , corrente, prefixo, "A.");
            break;
        case 3:
            resistencia = tensao / corrente;

            if(resistencia < 0) {
                resistencia *= 1000;
                prefixo = 'm'
            } else if(resistencia < 1000) {
                prefixo = '';
            } else if(resistencia < 10**6) {
                resistencia /= 1000;
                prefixo = 'K';
            } else if(resistencia < 10**9) {
                resistencia /= 10**6;
                prefixo = 'M';
            } else {
                resistencia /= 10**9;
                prefixo = 'B';
            }

            console.log("A resistência é de " , resistencia, prefixo, "Ω.");
            break;
        default:
            console.log("Erro: ID inválido.");
            break;
    }
}