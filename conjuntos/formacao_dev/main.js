/*

União

A união entre conjuntos, é definida da seguinte forma: A ∪ B = {x | x ∈ A ou x ∈ B}, isso significa que a união será composta por elementos que genericamente chamaremos de x sendo que x pertence ao conjunto A ou x pertence ao conjunto B.

*/

const planetas1 = new Set(['Terra', 'Mercúrio', 'Vênus', 'Marte', 'Netuno']);
const planetas2 = new Set(['Terra', 'Jupiter', 'Urano', 'Marte', 'Saturno']);

const union = new Set([...planetas1.values(), ...planetas2.values()]);
console.log(union);

/*

Intersecção
A intersecção entre conjuntos é definida da seguinte forma: A∩B = {x | x ∈ A e x ∈ B}, isso significa que x pertence tanto ao conjunto A quanto ao conjunto B. Dessa forma, a intersecção pode ser entendida como os dados compartilhados entre os conjuntos.

*/

const interseccao = new Set([...planetas1].filter(planeta => planetas2.has(planeta)));
console.log(interseccao);

/*

Diferença
A diferença entre conjuntos é definida da seguinte forma: A-B = {x | x ∈ A e x ∉ B}, isso significa que x pertence ao conjunto A, mas x não pertence ao conjunto B.

*/

const diferenca = new Set([...planetas1].filter(planeta => !planetas2.has(planeta)));
console.log(diferenca);

