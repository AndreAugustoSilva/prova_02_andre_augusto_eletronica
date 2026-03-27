function calculoResistor() {
    let faixas = parseInt(prompt("O resistor possui 4 ou 5 faixas?"))
    let cor1, cor2, cor3, cor4, cor5 = 0

    switch(faixas) {
        case 4:
            cor1 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para cinza;\n- 9 para branco.")*10);
            cor2 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para cinza;\n- 9 para branco."));
            cor3 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para dourado;\n- 9 para prateado."));
            cor4 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para marrom;\n- 1 para vermelho;\n- 2 para verde;\n- 3 para azul;\n- 4 para violeta;\n- 5 para cinza;\n- 6 para dourado;\n- 7 para prateado."));
            break;
        case 5:
            cor1 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para cinza;\n- 9 para branco.")*100);
            cor5 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para cinza;\n- 9 para branco.")*10);
            cor2 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para cinza;\n- 9 para branco."));
            cor3 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para preto;\n- 1 para marrom;\n- 2 para vermelho;\n- 3 para laranja;\n- 4 para amarelo;\n- 5 para verde;\n- 6 para azul;\n- 7 para violeta;\n- 8 para dourado;\n- 9 para prateado."));
            cor4 = parseInt(prompt("Digite um ID de uma cor:\n- 0 para marrom;\n- 1 para vermelho;\n- 2 para verde;\n- 3 para azul;\n- 4 para violeta;\n- 5 para cinza;\n- 6 para dourado;\n- 7 para prateado."));
            break;
    }

    if(cor3 >= 0 && cor3 <= 7){
        cor3 = 10**cor3;
    } else if(cor3 == 8) {
        cor3 = 0.1;
    } else if(cor3 == 9) {
        cor3 = 0.01;
    } else {
        console.log("Erro: ID Inválido.")
    }

    switch(cor4) {
        case 0:
            cor4 = 1;
            break;
        case 1:
            cor4 = 2;
            break;
        case 2:
            cor4 = 0.5;
            break;
        case 3:
            cor4 - 0.25;
            break;
        case 4:
            cor4 = 0.1;
            break;
        case 5:
            cor4 = 0.05;
            break;
        case 6:
            cor4 = 5;
            break;
        case 7:
            cor4 = 10;
            break;
        default:
            console.log("Erro: ID Inválido.")
            break;
    }

    cor2 += cor1;
    cor2 += cor5;
    cor2 *= cor3;

    let prefixoOhm;
    if(cor2 < 1000) {
        prefixoOhm = '';
    } else if(cor2 < 10**6) {
        cor2 /= 1000;
        prefixoOhm = 'K';
    } else if(cor2 < 10**9) {
        cor2 /= 10**6;
        prefixoOhm = 'M';
    } else {
        cor2 /= 10**9;
        prefixoOhm = 'B';
    }

    console.log("O resistor possui a resistência de ", cor2,prefixoOhm, "Ω, com ", cor4, "% de tolerância.")
}