# Criando um conjunto em Python
frutas = {"maçã", "banana", "laranja"}
print(frutas)

# Adicionando um elemento ao conjunto
frutas.add("uva")
print(frutas)

# Removendo um elemento do conjunto
frutas.remove("laranja")
print(frutas)

# Operações
frutas1 = {"maçã", "banana", "laranja"}
frutas2 = {"banana", "uva", "kiwi"}

print("União:", frutas1 | frutas2)
print("Interseção:", frutas1 & frutas2)
print("Diferença:", frutas1 - frutas2)


# Remover duplicatas de uma lista
lista_com_duplicatas = [1, 2, 2, 3, 4, 4, 5]
lista_sem_duplicatas = list(set(lista_com_duplicatas))
print(lista_sem_duplicatas)
