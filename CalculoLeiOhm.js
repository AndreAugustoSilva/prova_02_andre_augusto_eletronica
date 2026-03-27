function calculoLeiOhm() {
    let escolha = parseInt(prompt("Digite o que você deseja descobrir:\n- 1 para tensão;\n- 2 para corrente;\n- 3 para resistência"));
    let tensao, corrente, resistencia;

    if(escolha != 1) {
        tensao = parseFloat(prompt("Digite a tensão em volts:"));
    }

    if(escolha != 2) {
        corrente = parseFloat(prompt("Digite a corrente em amperes:"));
    }

    if(escolha != 3) {
        resistencia = parseFloat(prompt("Digite a resistencia em ohms:"));
    }

    switch(escolha) {
        case 1:
            tensao = corrente * resistencia;
            console.log("A tensão é de " , tensao , "V.");
            break;
        case 2:
            corrente = tensao / resistencia;
            console.log("A corrente é de " , corrente , "A.");
            break;
        case 3:
            resistencia = tensao / corrente;
            console.log("A resistência é de " , resistencia , "Ω.");
            break;
        default:
            console.log("Erro: ID inválido.");
            break;
    }
}