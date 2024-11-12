"""
5. Experimentos com Colisões
Altere a função hash para criar mais ou menos colisões (por exemplo, hash(key) % (self.size // 2)).
Implemente e compare sondagem linear com sondagem quadrática e encadeamento.

Como as colisões afetam o tempo de busca e inserção?
Pode custar mais tempo para o elemento entrar ou não naquele determinado indice, 
caso aquele indice esteja ocupado. Por isso que escolha do método é fundamental
para que a busca e inserção sejam eficientes.

Qual método de resolução de colisões parece mais eficiente?

"""

list_ = []

for i in range(4):
    number = int(input("Enter a number: "))
    personal_hash = number % 11
    list_.append(personal_hash)

print(list_)


def folding(number):
    square = number * number
    square_str = str(square)
    if len(square_str) > 1:
        numbers = square_str[2:4]
        numbers_int = int(numbers)

        return numbers_int % len(square_str)


print(folding(22))
print(folding(33))
print(folding(44))
print(folding(55))


def put(self, key, value):
    index = self.hash_function(key)

    while self.table[index] is not None:

        if self.table[index][0] == key:
            self.table[index] = (key, value)
            return
        index = (index + 1) % self.size // 2
    self.table[index] = (key, value)
