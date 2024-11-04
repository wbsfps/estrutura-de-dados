# 1
lista_par = {0, 2, 4, 6, 8, 10}
lista_impar = {1, 3, 5, 7, 9}

print(lista_par, lista_impar)


# 2
print(lista_par | lista_impar)
# Conclusão a união é a junção de ambos os conjuntos sem repetição de elementos

# 3
print(lista_par & lista_impar)
print(lista_impar & lista_par)
# A ordem não altera o resultado

# 4
print(lista_par - lista_impar)
print(lista_impar - lista_par)
# Sim, a ordem interfere no resultado

# 5
lista = [1, 2, 2, 3, 4, 4, 5]
set_da_lista = set(lista)
print(set_da_lista)

# 6 Conjuntos Imutáveis com frozenset
'''
Ele é chamado de frozenset e funciona de maneira semelhante a um set comum, 
mas com a diferença de que não permite a adição, remoção ou 
modificação de seus elementos após a criação.
'''

conjunto = {1, 2, 3, 4}
conjunto.add(5)
conjunto_imutavel = frozenset([1, 2, 3])
conjunto_imutavel.add(5)  # Não permite modificação

print(conjunto)
print(conjunto_imutavel)


# 7
frase = ["Eu", "amo", "muito", "o", "meu", "cachorro", "Obi", ".", "O", "nome",
         "dele", "é", "Obi", "porque", "eu", "amo", "muito", "Star", "Wars"]
frase_set = set(frase)
print(frase_set)
# 8
cores = {"vermelho", "verde", "azul"}
print(cores)
if "amarelo" not in cores:
    cores.add("amarelo")
print(cores)
