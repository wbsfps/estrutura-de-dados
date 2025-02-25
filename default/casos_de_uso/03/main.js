/*
Resolver as questões utilizando array. 

Cenário
Uma empresa quer analisar suas vendas diárias durante uma semana para identificar o dia com maior e menor número de vendas, bem como calcular a média de vendas diárias.

Requisitos
Armazenar as vendas diárias em um vetor.
Identificar o dia com maior e menor número de vendas.
Calcular a média de vendas diárias.
Exibir os resultados da análise.
*/

let vendas = [];

for (let i = 0; i < 7; i++) {
    let valorDasVendasDiaria = Number(prompt(`Valor total das vendas no dia ${i + 1}`));
    vendas.push(valorDasVendasDiaria);
}

let maiorDiaDeVenda = Math.max(...vendas);
let menorDiaDeVenda = Math.min(...vendas);
let somaDeVendasDiaria = vendas.reduce((resultado, valor) => resultado += valor);
let mediaDeVendas = somaDeVendasDiaria / 7;

let resumoVendas = {
    maiorVenda: maiorDiaDeVenda,
    menorDiaDeVenda: menorDiaDeVenda,
    mediaDeVendas: mediaDeVendas,
    vendasDiarias: vendas
};

console.log(resumoVendas);