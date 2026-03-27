# prova_02_andre_augusto_eletronica
prova 02 - calculadora eletrica

-- Utilitários de Eletrônica --

Uma ferramenta interativa em JavaScript desenvolvida para facilitar cálculos fundamentais de eletrônica e estimativas de consumo de energia elétrica.

O script funciona via navegador utilizando prompt para entrada de dados e o console para exibição dos resultados.

✨ Funcionalidades
O projeto é dividido em quatro módulos principais:
- Conversor de Múltiplos e Submúltiplos: Converte valores entre diferentes escalas (Giga, Mega, Kilo, Mili, Micro, Nano e Pico) para unidades como Ampere, Volt, Watt e Ohm.
- Calculadora de Consumo Residencial: Calcula o consumo mensal (kWh) de um eletrodoméstico e estima o custo em Reais ($R\$$) com base na tarifa local.
- Calculadora da Lei de Ohm: Resolve a equação fundamental $V = R \cdot I$. Permite encontrar Tensão, Resistência ou Corrente informando os outros dois valores.
- Identificador de Resistores: Decodifica o valor de resistência e a tolerância de resistores de 4 ou 5 faixas de cores.

🚀 Como Usar
Para rodar este script, você não precisa instalar nada, apenas um navegador:
Copie o código do arquivo principal.Abra qualquer site no seu navegador (ex: google.com).
Pressione F12 ou Ctrl + Shift + I para abrir as Ferramentas do Desenvolvedor.
Clique na aba Console.
Cole o código e pressione Enter.
Siga as instruções nas janelas de alerta que aparecerão na tela.

🛠️ Detalhes Técnicos
O script utiliza estruturas de controle fundamentais para garantir a precisão dos cálculos:
- Switch/Case: Utilizado para navegar entre os menus e para o mapeamento de cores dos resistores.
- Lógica de Potência: Para o cálculo de consumo, o script aplica a fórmula:$$E = P \cdot \Delta t$$(Onde $E$ é energia em kWh, $P$ é potência e $\Delta t$ é o tempo).
- Tratamento de Escalas: No módulo de resistores, o script converte automaticamente valores altos para notações mais legíveis como K (quilo), M (Mega) e B (Giga/Bilhão).

📝 Exemplo de Uso (Consumo)
Ao escolher a opção 2:
Input: "Ar-condicionado", "8 horas", "1" (kW), "2.5" (kW de potência), "0.90" (tarifa).
Output no Console: O eletrodoméstico Ar-condicionado gasta 600.00 kWh por mês. Isso equivale a 540.00 R$ mensais.

🤝 Contribuições
Sinta-se à vontade para clonar este repositório e adicionar novas fórmulas (como cálculos de circuitos em série/paralelo ou capacitância). Tenha um bom uso!