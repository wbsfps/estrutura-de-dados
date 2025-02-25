"""
3. Simulação de Colisões
Crie uma lista com índices fixos e simule uma tabela hash simples.
Use uma função de hash manual para mapear "chaves" para índices.

Exemplo
tabela_simples = [None] * 5

def hash_simples(chave):
    return len(chave) % 5  # Função hash simplificada

tabela_simples[hash_simples('maçã')] = 'fruta vermelha'
tabela_simples[hash_simples('banana')] = 'fruta amarela'
print(tabela_simples)


O que acontece quando duas chaves geram o mesmo índice?
Erro IndexError
Como podemos lidar com esse problema?
Utilizando métodos, por exemplo, resto da divisão, quadrado do meio, folding
"""

list_ = [None] * 11


def simple_hash(key):
    return len(key) % 11


list_[simple_hash('apple')] = 'red fruit'
list_[simple_hash('banana')] = 'yellow fruit'
list_[simple_hash('limon')] = 'green fruit'

print(list_)
print(len(list_))
