let fila = [];

for (let i = 0; i < 6; i++) {
    let cliente = {};
    cliente.nome = prompt("Informe o nome do cliente: ");
    fila.push(cliente.nome);
}

let clienteRemovido = fila.shift();
let tamanhoDaFila = fila.length();
let proximoClienteParaSerAtendido = fila[0];
console.log(clienteRemovido, tamanhoDaFila, proximoClienteParaSerAtendido);