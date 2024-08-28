// Crie uma função isPalindrome que verifica se uma string é um palíndromo (ou seja, lê-se da mesma forma de frente para trás e de trás para frente) usando uma pilha.

function isPalindrome(palavra) {
    let palavraLimpa = '';
    for (let i = 0; i < palavra.length; i++) {
        let caractere = palavra[i];
        if (caractere !== ' ') {
            palavraLimpa += caractere.toLowerCase();
        }
    }

    let pilha = [];

    for (let caractere of palavraLimpa) {
        pilha.push(caractere);
    }

    for (let caractere of palavraLimpa) {
        if (caractere !== pilha.pop()) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("pop"));
console.log(isPalindrome("poop"));
console.log(isPalindrome("popp"));
