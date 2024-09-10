function ultimoElemento(fila) {
    if (fila.length === 0) {
        return null; // Caso a fila esteja vazia
    }
    return fila[fila.length - 1]; // Retorna o último elemento sem removê-lo
}

// Testando a função com a fila especificada
let fila = ["Carlos", "Ana", "Cícero", "Bia", "Diego"];
let ultimo = ultimoElemento(fila);

console.log(ultimo); // Saída: "Diego"
