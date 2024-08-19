/*
Resolver as questões utilizando array. 

Cenário
Uma loja precisa de um sistema para controlar o estoque de seus produtos. O sistema deve ser capaz de armazenar a quantidade de produtos disponíveis, permitir a entrada e saída de produtos, e emitir alertas quando o estoque estiver baixo (menos de 5 unidades).

Requisitos
Armazenar os produtos e suas quantidades em um vetor. check
Permitir adicionar ou remover quantidades do estoque.
Emitir um alerta se algum produto tiver menos de 5 unidades em estoque.
Exibir o estoque atualizado.
*/

let produtos = [];

for (let i = 0; i < 2; i++) {
    let produto = {};
    produto.nome = prompt("Informe o nome do produto: ");
    produto.quantidade = Number(prompt(`Qual a quantidade do produto ${produto.nome} em estoque? `));
    produtos.push(produto);
}

let continuar = true;
while (continuar) {
    let adicionarOuRemover = prompt("Adicionar ou remover produtos? [A/R]").toLowerCase();
    let nomeProduto = prompt("Informe o nome do produto: ");
    let produto = produtos.find(p => p.nome.toLowerCase() === nomeProduto.toLowerCase());

    let quantidade;
    let criandoAlerta;
    
    if (adicionarOuRemover === "a".toLowerCase()) {
        quantidade = Number(prompt("Quanto quer adicionar? "));
        produto.quantidade += quantidade;
        alert(`Quantidade alterada do produto ${produto.nome}! ${produto.quantidade}`);
        produtos.forEach((produto) => {
            alert(`${produto.nome} - ${produto.quantidade}`);
        });
    } else if (adicionarOuRemover === "r".toLowerCase()) {
        quantidade = Number(prompt("Quanto quer remover? "));
        produto.quantidade -= quantidade;
        alert(`Quantidade alterada do produto ${produto.nome}! ${produto.quantidade}`);
        criandoAlerta = (produto.quantidade < 5) ? alert(`Só possui ${produto.quantidade} do produto ${produto.nome} em estoque`) : alert(`O produto ${produto.nome} possui mais de 5 unidades em estoque`);
        produtos.forEach((produto) => {
            alert(`${produto.nome} - ${produto.quantidade}`);
        });
    } else {
        alert("Valor inválido");
        break;
    }
}

console.log(produtos);