let array = ["Primeiro elemento", "Segundo elemento"];
console.log(array[0]);
console.log(array[1])
console.log(array.length);
console.log(array.map(s => s.toLowerCase()));

let promessa = {
    variable: "texto",
    array: [1, 2, 3, 4, 5]
}

console.log(promessa["array"]);
console.log(promessa.array);

let alimentos = [];
alimentos.push("frutas", "legumes"); // adiconando itens ao array
console.log(alimentos.length);
alimentos[5] = "manga";
console.log(alimentos);

console.log(Object.keys(alimentos)); // mostra os índices presentes no array [0, 1, 5]

alimentos.pop(); // Remover um item do final do Array
console.log(alimentos);

let index = alimentos.indexOf("legumes"); // localiza o primeiro indice do elemento

let removedItem = alimentos.splice(index, index) // Remover um item pela posição do índice

console.log(removedItem)

var vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1,
    n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']

methods = [
    "join",
    "reverse",
    "sort",
    "push",
    "pop",
    "shift", // Remover do início do Array
    "unshift", // Adicionar ao início do Array
    "splice",
    "concat",
    "slice",
    "indexOf", // Procurar o índice de um item na Array
    "lastIndexOf",
    "forEach",
    "map",
    "reduce",
    "reduceRight",
    "filter",
    "some",
    "every",
    "isArray",
]