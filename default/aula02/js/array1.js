let array = [1, 2, 3];

console.log(array.map(n => n * 2));

let temp = [31.9, 35.3, 42, 38, 25.5];

let somaDasTemperaturas = temp.reduce((result, quantity) => result += quantity);
console.log(somaDasTemperaturas);

temp.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
});