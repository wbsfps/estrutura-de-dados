// Adicionar e Remover Itens de uma Pilha
// Descrição: Crie uma função stack que cria uma pilha, adiciona alguns itens, remove um item e retorna a pilha após cada operação.

function Stack() {
    items = [];
    this.push = (element) => {
        return items.push(element);
    }

    this.pop = () => {
        return items.pop();
    }

    this.print = () => {
        console.log(items);
    }
}

const stack = new Stack();

stack.push("teste");
stack.push("fulano");
stack.print();

let removed = stack.pop();
console.log(`Item removido da pilha ${removed}`);

stack.print()