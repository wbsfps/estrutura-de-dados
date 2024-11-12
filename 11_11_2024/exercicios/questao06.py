'''
6. Simulação de Redimensionamento
Insira um grande número de elementos (50+) em uma tabela pequena e observe o rehashing em ação.
Modifique a condição de redimensionamento para valores como 50% ou 90% e compare os resultados.

O que acontece quando o redimensionamento ocorre?
Quando a taxa de ocupação (número de elementos / tamanho da tabela) 
ultrapassa um certo limite (no exemplo, 70%), o redimensionamento (ou rehashing) é acionado. 
Esse processo duplica o tamanho da tabela hash e reatribui os elementos.

Como o tempo de busca e inserção muda antes e depois do redimensionamento?
Antes - A medida que a tabela enche é mais difícil terem acessos aos indices, com isso é
notável que o tempo de busca e inserção aumente.

Depois - Como o tamanho da tabela dobra e os elementos são redistribuídos, 
as colisões são reduzidas, e o tempo de busca e inserção geralmente diminui, 
pois cada elemento tem mais espaço para se dispersar.
'''


class HashTableWithRehashing:
    def __init__(self, size=10, rehash_threshold=0.7):
        """
        Inicializa uma tabela de dispersão com suporte a rehashing dinâmico.

        Parâmetros:
        size (int): Tamanho inicial da tabela.
        rehash_threshold (float): Taxa de ocupação que dispara o rehashing.
        """
        self.size = size  # Tamanho inicial da tabela.
        # Limite para disparar rehashing.
        self.rehash_threshold = rehash_threshold
        self.table = [None] * self.size
        self.count = 0  # Contador de elementos.

    def hash_function(self, key):
        return hash(key) % self.size

    def put(self, key, value):
        if self.count / self.size > self.rehash_threshold:
            self._rehash()
        index = self.hash_function(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = (key, value)
                return
            index = (index + 1) % self.size
        self.table[index] = (key, value)
        self.count += 1

    def get(self, key):
        index = self.hash_function(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                return self.table[index][1]
            index = (index + 1) % self.size
        return None

    def _rehash(self):
        old_table = self.table
        self.size *= 2  # Dobra o tamanho da tabela.
        self.table = [None] * self.size
        self.count = 0
        for item in old_table:
            if item is not None:
                self.put(item[0], item[1])

# Função para testar diferentes limites de redimensionamento


def test_rehashing(threshold, num_elements=25, initial_size=10):
    hash_table = HashTableWithRehashing(
        size=initial_size, rehash_threshold=threshold)
    for i in range(num_elements):
        hash_table.put(f"chave{i}", f"valor{i}")
    print(f"Tabela com rehash_threshold={threshold}: \n")
    print("Tabela após rehashing: \n", hash_table.table)
    print("Tamanho final da tabela: \n", hash_table.size)
    print("Número de elementos: \n", hash_table.count)
    print()


# Teste com 50 elementos e diferentes limites de redimensionamento
test_rehashing(0.5, num_elements=50)
test_rehashing(0.7, num_elements=50)
test_rehashing(0.9, num_elements=50)
