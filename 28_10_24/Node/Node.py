class Node:  # Define a classe Node, que representa cada nó individual na lista ligada.
    def __init__(self, data):  # Método inicializador para a classe Node.
        # Armazena o valor do nó, passado como argumento no momento da criação.
        self.data = data
        # Inicializa o próximo nó como None, pois este nó não está ligado a outro ainda.
        self.next = None


class LinkedList:  # Define a classe LinkedList, que representa a lista ligada em si.
    def __init__(self):  # Método inicializador para a classe LinkedList.
        # Define o atributo head, que representa o primeiro nó da lista. Inicia como None, indicando uma lista vazia.
        self.head = None

    # Método para adicionar um novo nó ao final da lista.
    def append(self, data):
        # Cria uma nova instância da classe Node com o valor passado.
        new_node = Node(data)
        if not self.head:  # Verifica se a lista está vazia (head é None).
            # Se estiver vazia, head aponta para o new_node, que é agora o primeiro nó.
            self.head = new_node
            return  # Sai do método, pois o novo nó foi adicionado como head.

        # Cria uma referência ao primeiro nó (head) para começar a busca pelo final da lista.
        last = self.head
        while last.next:  # Loop para encontrar o último nó, onde last.next será None.
            # Move para o próximo nó até encontrar o último (onde last.next é None).
            last = last.next

        # Define o atributo next do último nó como o novo nó, conectando-o ao final da lista.
        last.next = new_node

    def display(self):  # Método para exibir os elementos da lista.
        node = self.head  # Começa no primeiro nó da lista.
        while node:  # Loop enquanto houver um nó (node não é None).
            # Imprime o valor do nó atual seguido de " -> " para indicar a ligação.
            print(node.data, end=" -> ")
            node = node.next  # Move para o próximo nó.
        print("None")  # Indica o final da lista com "None".

    # Método para remover um nó com um valor específico.
    def remove(self, data):
        # Caso especial: o nó a ser removido está no início (é o head).
        # Verifica se a lista não está vazia e se o head contém o valor.
        if self.head and self.head.data == data:
            # Atualiza o head para o próximo nó, removendo o primeiro nó.
            self.head = self.head.next
            return  # Sai do método pois a remoção foi concluída.

        # Começa no primeiro nó para procurar o valor a ser removido.
        current = self.head
        # 'previous' é o nó que precede o 'current' e será usado para ajustar a ligação ao remover.
        previous = None

        # Loop para encontrar o nó com o valor especificado
        # Continua enquanto current não é None e o valor não é encontrado.
        while current and current.data != data:
            previous = current  # Atualiza o previous para o current.
            current = current.next  # Move current para o próximo nó.

        # Se o nó foi encontrado (current não é None)
        if current:  # Verifica se o nó com o valor foi encontrado.
            # 'Pula' o nó atual, ligando o nó anterior ao próximo do atual.
            previous.next = current.next
        else:
            # Exibe uma mensagem se o valor não estiver na lista.
            print("Valor não encontrado na lista.")


# Exemplo de uso
ll = LinkedList()  # Cria uma nova lista ligada vazia.
ll.append(1)  # Adiciona um nó com valor 1 ao final da lista.
ll.append(2)  # Adiciona um nó com valor 2 ao final da lista.
ll.append(3)  # Adiciona um nó com valor 3 ao final da lista.
ll.display()  # Exibe todos os elementos da lista: 1 -> 2 -> 3 -> None
ll.remove(2)  # Remove o nó com valor 2.
ll.display()  # Exibe todos os elementos da lista: 1 -> 3 -> None
