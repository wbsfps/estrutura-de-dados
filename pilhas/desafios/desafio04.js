// Escreva uma função que verifica se todos os delimitadores em uma expressão matemática estão balanceados.
// Delimitadores incluem parênteses (), colchetes [], e chaves {}.
// A função deve garantir que para cada abertura exista um fechamento correspondente e que eles estejam na ordem correta.

// Instruções/Dicas do desafio:
// Crie uma função  que recebe uma string  como argumento.
// A função deve retornar true se os delimitadores estiverem balanceados e false caso contrário.

function verificaBalanceamento(expressao) {
    const pilha = [];
    const aberturas = { '(': '(', '[': '[', '{': '{' };
    const fechamentos = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];
        if (char in aberturas) {
            pilha.push(char);
        } else if (char in fechamentos) {
            if (pilha.length === 0 || pilha.pop() !== fechamentos[char]) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}

// Exemplos de uso:
const expressao1 = "({[]})";
const expressao2 = "([)]";
const expressao3 = "{[()]}[]";

console.log(verificaBalanceamento(expressao1)); // True
console.log(verificaBalanceamento(expressao2)); // False
console.log(verificaBalanceamento(expressao3)); // True
