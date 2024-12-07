// Função que calcula o total de cada linha da tabela e o total geral
function calcular() {
    // Seleciona todas as linhas da tabela
    const linhas = document.querySelectorAll("table tr");
    // Inicializa a variável que armazenará o total geral
    let totalGeral = 0;

    // Itera sobre cada linha da tabela
    linhas.forEach((linha, index) => {
        // Verifica se a linha não é o cabeçalho (index 0) e não é a linha do total final
        if (index > 0 && index < linhas.length - 1) {
            // Seleciona o valor do preço da linha atual
            const preco = linha.querySelector(".preco").value;
            // Seleciona o valor da quantidade da linha atual
            const quantidade = linha.querySelector(".qtd").value;
            // Calcula o total para a linha atual
            // Se o preço ou a quantidade não forem números válidos, usa 0
            const total = (parseFloat(preco) * parseFloat(quantidade)) || 0;
            // Atualiza a célula de total da linha com o valor calculado, formatado com duas casas decimais
            linha.querySelector(".total").textContent = total.toFixed(2);
            // Adiciona o total da linha ao total geral
            totalGeral += total;
        }
    });
    // Atualiza a célula que mostra o total geral com o valor calculado, formatado com duas casas decimais
    document.getElementById("totalFinal").textContent = totalGeral.toFixed(2);
}

// Seleciona todos os campos de preço e quantidade
document.querySelectorAll('.preco, .qtd').forEach(input => {
    // Adiciona um evento que escuta mudanças nos campos de entrada
    // Quando o usuário digita algo, a função calcular() é chamada
    input.addEventListener('input', calcular);
});