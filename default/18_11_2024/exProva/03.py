"""
Questão 3: Hashing

Considere uma função hash que atribui valores de 0 a 9 para organizar
alunos em 10 grupos com base em suas matrículas.

3.1. Se duas matrículas diferentes geram o mesmo valor hash, o que
acontece? Como esse problema é conhecido?

Colisões. Pelo fato do valor da matricula dividido pelo tamanho da tabela
ser igual ao resto da divisao, a colisao ocorre.

3.2. Explique uma técnica para lidar com essa situação e garanta que
todos os dados sejam armazenados corretamente.

Sondagem Quadrática. Ela reduz a probalidade de formar clusters lineares longos.
"""
