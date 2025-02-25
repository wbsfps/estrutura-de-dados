"""
4. Implementação Guiada
Sem olhar para os códigos anteriores, tente implementar os métodos put, get e
remove.
Use a função hash_function para calcular o índice.
Insira o valor no índice correspondente.
"""


def hash_function(self, key):
    # Calcula o índice usando a função hash e o tamanho da tabela.
    return hash(key) % self.size


def put(self, key, value):

    index = self.hash_function(key)
    while self.table[index] is not None:
        if self.table[index][0] == key:
            self.table[index] = (key, value)
            return
        # Sondagem linear: tenta o próximo índice.
        index = (index + 1) % self.size
        self.table[index] = (key, value)


def get(self, key):
    index = self.hash_function(key)
    while self.table[index] is not None:
        if self.table[index][0] == key:
            return self.table[index][1]
        index = (index + 1) % self.size
    return None


def delete(self, key):

    index = self.hash_function(key)
    while self.table[index] is not None:
        if self.table[index][0] == key:
            self.table[index] = None
            return
        index = (index + 1) % self.size
