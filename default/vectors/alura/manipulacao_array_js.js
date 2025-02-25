// Manipulação de array com map, filter e reduce

// O desafio dessa semana foi o seguinte, dado o array `empresas`: 

const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];



/*
Tenho que exibir as seguintes informações:

Empresas criadas depois dos anos 2000.
O nome de cada empresa e de seu CEO.
O valor de todas as empresas somadas.
*/

/*
Filter
Por sorte já existe um método para fazer esse tipo de filtro e adivinha o seu nome ? Isso mesmo filter. Ele vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado, no nosso caso, quando ano de criação for maior que 2000.

Como temos objetos dentro do array, precisamos acessar suas propriedade para fazer o filtro. Para isso basta chamar o nome do array seguido da notação de ponto e logo após, o nome da propriedade.
*/
let filtrandoEmpresasPos2000 = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
console.log(filtrandoEmpresasPos2000);

/* 
Map
Felizmente temos esse método pronto e ele se chama map, com ele é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.

No nosso caso vamos percorrer o array e dentro de cada objeto vamos pegar as propriedades nome e CEO de cada empresa.
*/
let mapNomeEmpresaECEO = empresas.map((empresa) => `${empresa.nome} - ${empresa.CEO}`);

console.log(mapNomeEmpresaECEO);

/*
Reduce
E temos, o método reduce passa por cada item do array fazendo uma expressão escolhida, e no final vai devolver um único valor. Exatamente o que precisamos para fazer a soma do valor de mercado das empresas.

Ele recebe dois valores, um acumulado e um atual, no nosso caso o acumulado irá somar com o atual. Como no primeiro loop da soma não temos nenhum valor acumulado, então precisamos passar como segundo parâmetro esse valor, que no nosso caso vai ser 0.

Se não tivéssemos passado um valor de acumulado o `reduce` pegaria o primeiro item do array, tomando o como se fosse o valor acumulado.
*/

let somandoTodosOsValores = empresas.reduce((result, quantity) => result += quantity.valorDeMercado, 0);

console.log(somandoTodosOsValores);