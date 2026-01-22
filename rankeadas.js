// calculo de rankeadas com retorno de nível total de partidas e porcentagem de vitórias

function calcularRankeadas(nome, vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    
    let totalPartidas = vitorias + derrotas;
    let porcentagemVitorias = (vitorias / totalPartidas) * 100;

	

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Heroi ${nome} tem saldo de ${saldoVitorias}, de um total de ${totalPartidas} partidas e está no nível de ${nivel} com ${porcentagemVitorias}% de vitórias! ele é um desafio! `;
}

// ddados partidas
let nome = "Divine";
let vitorias = 70;
let derrotas = 30;

console.log(calcularRankeadas(nome, vitorias, derrotas));