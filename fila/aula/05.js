function moverDoisPrimeirosParaFinal(fila) {
    if (fila.length >= 2) {
        // Remove os dois primeiros elementos da fila
        let primeiro = fila.shift();
        let segundo = fila.shift();

        // Adiciona os dois elementos removidos ao final da fila
        fila.push(primeiro);
        fila.push(segundo);
    }

    return fila;
}

// Testando a função com a fila especificada
let fila = ["Carlos", "Ana", "Cícero", "Bia", "Diego"];
let resultadoFinal = moverDoisPrimeirosParaFinal(fila);

console.log(resultadoFinal);
