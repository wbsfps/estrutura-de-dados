// Dado o array let números = [10, 20, 30, 40, 50], calcule a soma de todos os elementos usando um loop for e exiba o resultado.

let numeros = [10, 20, 30, 40, 50];
let somandoNumeros = numeros.reduce((result, values) => result += values);
console.log(somandoNumeros);

let sum = 0;

for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}

console.log(sum);