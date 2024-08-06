// typeof
console.log(typeof (5));
console.log(typeof (12.7));
console.log(typeof (-123));
console.log(typeof '');
console.log(typeof { name: "teste" });
console.log(typeof function teste() { });

// aritmética
console.log(typeof (2 + 2));
console.log(typeof (2 / 22));
console.log(2 * 4);
console.log(2 - 1);
console.log(2 % 2);

// special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// Strings
console.log(typeof "Oi, meu nome é fulano");
console.log(typeof 'A prova será no papel');
console.log(typeof `Teste`);
console.log(typeof "Infinity");
console.log(typeof Infinity);

// Strings: detalhes técnicos
console.log(`A soma de 2 + 2 é ${2 + 2}`);
console.log("O " + "meu" + " nome " + "é " + " X");

// booleans
console.log(typeof true);
console.log(typeof false);
console.log(typeof (10 > 2));

// Booleans: operadores lógicos exemplos
console.log(5 == 4);
console.log('Matheus' !== 'Matheus');
console.log(3 === '3');
console.log(4 === 4);
console.table(5 > 3 && 3 == 2);
console.table(5 > 3 || 3 == 1);
console.log(!(!(true && true)));
console.log(false || false);