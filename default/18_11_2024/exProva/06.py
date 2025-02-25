"""
Questão 6: Reflexão sobre Estruturas de Dados

6.1. Você foi contratado para projetar um sistema que organiza
mensagens de um chat em tempo real. As mensagens podem ser
enviadas fora de ordem e precisam ser organizadas rapidamente para
exibição aos usuários.

Que estrutura de dados você usaria para esse sistema? Justifique sua
escolha, explicando os benefícios em relação às operações de inserção,
remoção e busca.

R: Árvore, por conta da manutenção de ordem, operações de busca, remoção e inserção é O(log n).
Fila de priopridade: cada mensagem teria um valor associado (por exemplo, um timestamp) que define sua posição.
"""
