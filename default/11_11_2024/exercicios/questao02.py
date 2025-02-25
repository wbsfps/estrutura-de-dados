"""
2. Crie um dicionário simples em Python usando {}.
Insira, recupere e remova valores com operações básicas.

Exemplo:
# Criação de um dicionário
meu_dicionario = {}
meu_dicionario['nome'] = 'João'
meu_dicionario['idade'] = 25
print(meu_dicionario['nome'])  # Saída: João
# Remoção de um valor
del meu_dicionario['idade']


O que acontece se você tentar acessar uma chave inexistente?
Erro KeyError

Como você pode verificar se uma chave existe antes de acessá-la?
Verificando com not in
"""

dict_ = {}

dict_test = {0: "William"}
print(dict_test["William"])


def add_data_in_dict(quantity):

    for i in range(quantity):
        element = input('Element: ')
        if element not in dict_:
            dict_[i] = element

        else:
            new_element = input('Enter again element: ')
            dict_[i] = new_element
    return dict_


print(add_data_in_dict(5))
