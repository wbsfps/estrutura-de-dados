/*
Em Javascript os arrays se comportam de forma parecida ao buscar o item na lista, a diferença é que ele começa a contar do zero, assim:

Array JavaScript - Exemplo: Lista de Frutas

Número	Frutas
0	Maçãs
1	Uvas
2	Bananas
3	Abacaxi
4	Morangos
*/

let listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"]; // declarando um array
// Acessando os elementos 1º forma
let primeiroItem = listaDeFrutas[0];
let segundoItem = listaDeFrutas[1];
let terceiroItem = listaDeFrutas[2];
// 2º forma agora utilizando iteração
listaDeFrutas.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});

/*
Métodos de Array em JavaScript
Existem alguns métodos muito usados por desenvolvedores e desenvolvedoras ao lidar com arrays.

Acessando um elemento pelo seu índice
Podemos acessar o índice de um elemento com o indexOf() passando como parâmetro o elemento.

Adicionar elementos
Para adicionar um elemento ao final do array podemos usar o push().

Remover um elemento do Array JavaScript
Para remover um elemento do início de um array podemos usar o shift().
Para remover um elemento do final de um array podemos usar o pop().

Em ambos os métodos, não é preciso passar o elemento como parâmetro.
Podemos também remover um item a partir de seu índice com o método splice().
*/

listaDeFrutas.indexOf("Uvas");
listaDeFrutas.push("Laranjas");
listaDeFrutas.shift();
listaDeFrutas.pop();

let pos = listaDeFrutas.indexOf("Abacaxi");
listaDeFrutas.splice(pos, 1);
